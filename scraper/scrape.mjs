import { chromium } from 'playwright'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = join(__dirname, 'output')

const PAGES = [
  { name: 'home', url: 'https://www.kofc10205.com/' },
  { name: 'about', url: 'https://www.kofc10205.com/aboutus' },
  { name: 'faith-in-action', url: 'https://www.kofc10205.com/faithinaction' },
  { name: 'events', url: 'https://www.kofc10205.com/eventslist' },
  { name: 'team', url: 'https://www.kofc10205.com/theteam' },
  { name: 'join', url: 'https://www.kofc10205.com/joinus' },
  { name: 'contact', url: 'https://www.kofc10205.com/contactus' },
  { name: 'faq', url: 'https://www.kofc10205.com/faq' },
  { name: 'photos', url: 'https://www.kofc10205.com/photos' },
  { name: 'news', url: 'https://www.kofc10205.com/inthenews' },
  { name: 'our-parish', url: 'https://www.kofc10205.com/our-parish' },
  { name: 'faith-corner', url: 'https://www.kofc10205.com/faith-corner' },
  { name: 'prayer-request', url: 'https://www.kofc10205.com/prayer-request' },
  { name: 'knights-choir', url: 'https://www.kofc10205.com/knights-choir' },
  { name: 'challenges', url: 'https://www.kofc10205.com/challenges' },
  { name: 'columbia', url: 'https://www.kofc10205.com/columbia' },
  { name: 'volunteer', url: 'https://www.kofc10205.com/volunteer' },
  { name: 'groups', url: 'https://www.kofc10205.com/groups' },
  { name: 'cor', url: 'https://www.kofc10205.com/cor' },
  { name: 'jesus', url: 'https://www.kofc10205.com/jesus' },
  { name: 'business-meeting', url: 'https://www.kofc10205.com/business-meeting' },
]

async function scrapePage(page, { name, url }) {
  console.log(`Scraping: ${name} (${url})`)

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
    // Wait for Wix to fully render
    await page.waitForTimeout(3000)

    // Extract content
    const data = await page.evaluate(() => {
      const getText = (selector) => {
        const els = document.querySelectorAll(selector)
        return Array.from(els).map(el => el.textContent.trim()).filter(Boolean)
      }

      const getImages = () => {
        const imgs = document.querySelectorAll('img')
        return Array.from(imgs)
          .map(img => ({
            src: img.src,
            alt: img.alt || '',
            width: img.naturalWidth,
            height: img.naturalHeight,
          }))
          .filter(img => img.src && !img.src.includes('data:') && img.width > 50)
      }

      const getLinks = () => {
        const links = document.querySelectorAll('a[href]')
        return Array.from(links)
          .map(a => ({ text: a.textContent.trim(), href: a.href }))
          .filter(l => l.text && l.href)
      }

      return {
        title: document.title,
        headings: {
          h1: getText('h1'),
          h2: getText('h2'),
          h3: getText('h3'),
          h4: getText('h4'),
        },
        paragraphs: getText('p'),
        listItems: getText('li'),
        images: getImages(),
        links: getLinks(),
        // Get full body text for reference
        bodyText: document.body?.innerText?.substring(0, 10000) || '',
      }
    })

    // Take a screenshot
    await page.screenshot({
      path: join(OUTPUT_DIR, `${name}.png`),
      fullPage: true,
    })

    return { name, url, ...data, error: null }
  } catch (err) {
    console.error(`  Error scraping ${name}: ${err.message}`)
    return { name, url, error: err.message }
  }
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true })

  console.log('Launching browser...')
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  })

  const page = await context.newPage()
  const results = []

  for (const pageInfo of PAGES) {
    const result = await scrapePage(page, pageInfo)
    results.push(result)
  }

  await browser.close()

  // Write combined results
  writeFileSync(
    join(OUTPUT_DIR, 'all-pages.json'),
    JSON.stringify(results, null, 2)
  )

  console.log(`\nDone! Scraped ${results.length} pages.`)
  console.log(`Results saved to: ${OUTPUT_DIR}/all-pages.json`)
  console.log(`Screenshots saved to: ${OUTPUT_DIR}/*.png`)

  // Summary
  const successful = results.filter(r => !r.error).length
  const failed = results.filter(r => r.error).length
  console.log(`\nSuccess: ${successful} | Failed: ${failed}`)
}

main().catch(console.error)
