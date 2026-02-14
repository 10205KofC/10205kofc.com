import { chromium } from 'playwright'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = join(__dirname, 'output')

async function scrapeVideos() {
  mkdirSync(OUTPUT_DIR, { recursive: true })

  console.log('Launching browser...')
  const browser = await chromium.launch({ headless: false }) // visible so video player loads properly
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  })

  const page = await context.newPage()

  // Collect all video source URLs we find
  const videoUrls = []

  // Listen for network requests to catch video source URLs
  page.on('response', async (response) => {
    const url = response.url()
    if (
      url.includes('.mp4') ||
      url.includes('video.wixstatic.com') ||
      url.includes('wix-vod') ||
      (url.includes('wixstatic.com') && response.headers()['content-type']?.includes('video'))
    ) {
      console.log(`  [VIDEO URL FOUND] ${url}`)
      videoUrls.push(url)
    }
  })

  console.log('Navigating to homepage...')
  await page.goto('https://www.kofc10205.com/', { waitUntil: 'networkidle', timeout: 45000 })
  await page.waitForTimeout(5000) // let Wix fully render

  // Take screenshot of video section
  await page.screenshot({ path: join(OUTPUT_DIR, 'video-section.png'), fullPage: true })

  // Try to find and interact with video elements
  console.log('\nLooking for video elements...')

  // Method 1: Find Wix video player buttons
  const playButtons = await page.locator('[data-testid="play-button"], [aria-label="Play Video"], button:has-text("Play Video")').all()
  console.log(`Found ${playButtons.length} play buttons`)

  for (let i = 0; i < playButtons.length; i++) {
    try {
      console.log(`\nClicking play button ${i + 1}...`)
      await playButtons[i].scrollIntoViewIfNeeded()
      await page.waitForTimeout(1000)
      await playButtons[i].click()
      await page.waitForTimeout(5000) // wait for video to start loading

      // Try to extract video src from <video> elements
      const videoSrcs = await page.evaluate(() => {
        const videos = document.querySelectorAll('video')
        return Array.from(videos).map(v => ({
          src: v.src || v.querySelector('source')?.src || '',
          currentSrc: v.currentSrc || '',
          poster: v.poster || '',
        })).filter(v => v.src || v.currentSrc)
      })
      console.log(`  Found ${videoSrcs.length} <video> elements with sources:`)
      videoSrcs.forEach(v => console.log(`    src: ${v.src || v.currentSrc}`))

      // Pause the video
      await page.evaluate(() => {
        document.querySelectorAll('video').forEach(v => v.pause())
      })
    } catch (err) {
      console.log(`  Error with play button ${i + 1}: ${err.message}`)
    }
  }

  // Method 2: Look for Wix video gallery items and click thumbnails
  console.log('\nLooking for video gallery thumbnails...')
  const thumbnails = await page.locator('[data-hook="item-wrapper"], [data-testid="video-thumbnail"]').all()
  console.log(`Found ${thumbnails.length} video thumbnails`)

  for (let i = 0; i < Math.min(thumbnails.length, 6); i++) {
    try {
      console.log(`\nClicking thumbnail ${i + 1}...`)
      await thumbnails[i].scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)
      await thumbnails[i].click()
      await page.waitForTimeout(5000)

      const videoSrcs = await page.evaluate(() => {
        const videos = document.querySelectorAll('video')
        return Array.from(videos).map(v => ({
          src: v.src || v.querySelector('source')?.src || '',
          currentSrc: v.currentSrc || '',
        })).filter(v => v.src || v.currentSrc)
      })
      console.log(`  Found sources:`, videoSrcs.map(v => v.src || v.currentSrc))
    } catch (err) {
      console.log(`  Error with thumbnail ${i + 1}: ${err.message}`)
    }
  }

  // Method 3: Extract all video-related data from the page
  console.log('\nExtracting all video data from DOM...')
  const allVideoData = await page.evaluate(() => {
    // Find all video elements
    const videos = Array.from(document.querySelectorAll('video')).map(v => ({
      src: v.src,
      currentSrc: v.currentSrc,
      poster: v.poster,
      sources: Array.from(v.querySelectorAll('source')).map(s => ({ src: s.src, type: s.type })),
    }))

    // Find all iframes that might contain videos
    const iframes = Array.from(document.querySelectorAll('iframe')).map(f => ({
      src: f.src,
      title: f.title,
    })).filter(f => f.src)

    // Look for Wix video data in page scripts/attributes
    const wixVideoData = []
    document.querySelectorAll('[data-video-info], [data-video-url]').forEach(el => {
      wixVideoData.push({
        videoInfo: el.getAttribute('data-video-info'),
        videoUrl: el.getAttribute('data-video-url'),
      })
    })

    return { videos, iframes, wixVideoData }
  })

  console.log('\n=== RESULTS ===')
  console.log('Video elements:', JSON.stringify(allVideoData.videos, null, 2))
  console.log('Iframes:', JSON.stringify(allVideoData.iframes, null, 2))
  console.log('Wix video data:', JSON.stringify(allVideoData.wixVideoData, null, 2))
  console.log('Network-intercepted URLs:', JSON.stringify([...new Set(videoUrls)], null, 2))

  // Save all findings
  const results = {
    videoElements: allVideoData.videos,
    iframes: allVideoData.iframes,
    wixVideoData: allVideoData.wixVideoData,
    networkVideoUrls: [...new Set(videoUrls)],
  }

  writeFileSync(join(OUTPUT_DIR, 'video-urls.json'), JSON.stringify(results, null, 2))
  console.log(`\nResults saved to ${OUTPUT_DIR}/video-urls.json`)

  await browser.close()
}

scrapeVideos().catch(console.error)
