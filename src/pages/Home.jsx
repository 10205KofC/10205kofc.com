import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPray, FaUsers, FaChild, FaCalendarAlt, FaArrowRight, FaPlay, FaYoutube } from 'react-icons/fa'
import { GiSwordBrandish } from 'react-icons/gi'
import './pages.css'

const programs = [
  {
    icon: <FaPray />,
    title: 'Faith',
    description: 'Strengthening our Catholic faith through prayer, devotion, and spiritual growth programs.',
  },
  {
    icon: <FaUsers />,
    title: 'Community',
    description: 'Serving our neighbors through food drives, fundraisers, and charitable outreach.',
  },
  {
    icon: <FaChild />,
    title: 'Family',
    description: 'Building strong Catholic families through events, retreats, and fellowship.',
  },
  {
    icon: <GiSwordBrandish />,
    title: 'Life',
    description: 'Defending the sanctity of life from conception to natural death.',
  },
]

const upcomingEvents = [
  {
    date: 'Fri, Feb 20',
    title: "Fish Fry's - 2026 Lent Season",
    location: 'St. Thomas More Church',
    type: 'fundraiser',
  },
  {
    date: 'Tue, Feb 17',
    title: 'Monthly Social Meeting',
    location: 'St. Thomas More Catholic Church',
    type: 'meeting',
  },
  {
    date: 'Fri, Feb 20',
    title: 'PRAY at Planned Parenthood',
    location: 'Planned Parenthood',
    type: 'faith',
  },
  {
    date: 'Tue, Mar 03',
    title: 'Monthly Business Meeting',
    location: 'St. Thomas More Catholic Church',
    type: 'meeting',
  },
  {
    date: 'Sat, Mar 14',
    title: 'Food Drive 2026 - Box Distribution',
    location: 'St. Thomas More',
    type: 'community',
  },
  {
    date: 'Sat, Mar 21',
    title: 'Free Throw Championship',
    location: 'STM Catholic School (Gym)',
    type: 'youth',
  },
]

const videos = [
  {
    title: 'A Message from Our Knights',
    youtubeId: 'l_AStXcA1cw',
    duration: '1:20',
    thumbnail: '/images/vid-message.jpg',
  },
  {
    title: 'Homeless Coats',
    youtubeId: 'mWJvtC8Qm74',
    duration: '2:14',
    thumbnail: '/images/vid-coats.jpg',
  },
  {
    title: 'Rockies Food Bank',
    youtubeId: 'kJScd486yKQ',
    duration: '1:29',
    thumbnail: '/images/vid-foodbank.jpg',
  },
  {
    title: 'Kids Coats',
    youtubeId: 'MyxPtLXSPE4',
    duration: '2:19',
    thumbnail: '/images/vid-kidscoats.jpg',
  },
  {
    title: 'Marshal Fire Relief',
    youtubeId: 'Ql0dV3SWd0g',
    duration: '3:01',
    thumbnail: '/images/vid-fire.jpg',
  },
]

const VideoGallery = () => {
  const [featured, setFeatured] = useState(videos[0])
  const [featuredPlaying, setFeaturedPlaying] = useState(false)
  const rest = videos.filter((v) => v !== featured)

  const selectVideo = (video) => {
    setFeatured(video)
    setFeaturedPlaying(false)
  }

  return (
    <div className="video-gallery">
      <div className="video-gallery__featured card">
        {featuredPlaying ? (
          <div className="video-gallery__player">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}?autoplay=1&rel=0`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="video-gallery__thumbnail" onClick={() => setFeaturedPlaying(true)}>
            <img src={featured.thumbnail} alt={featured.title} />
            <div className="video-card__overlay">
              <FaPlay className="video-card__play-icon video-card__play-icon--lg" />
            </div>
            <span className="video-card__duration">{featured.duration}</span>
          </div>
        )}
        <div className="video-gallery__featured-info">
          <h3>{featured.title}</h3>
        </div>
      </div>
      <div className="video-gallery__sidebar">
        {rest.map((video) => (
          <div
            key={video.youtubeId}
            className="card video-sidebar-card"
            onClick={() => selectVideo(video)}
          >
            <div className="video-sidebar-card__thumb">
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-card__overlay">
                <FaPlay className="video-card__play-icon video-card__play-icon--sm" />
              </div>
              <span className="video-card__duration video-card__duration--sm">{video.duration}</span>
            </div>
            <div className="video-sidebar-card__info">
              <h4>{video.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/images/hero-bg.jpg"
            alt="Knights of Columbus Council 10205 members"
          />
        </div>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <img
            src="/images/kofc-emblem.png"
            alt="Knights of Columbus emblem"
            className="hero__emblem"
          />
          <h1 className="hero__title">Faith in Action</h1>
          <p className="hero__pre">Knights of Columbus &bull; Council 10205 &bull; St. Thomas More Parish</p>
          <p className="hero__subtitle">
            In Service to One. In Service to All.
          </p>
          <div className="hero__buttons">
            <Link to="/join" className="btn btn-primary">Become a Knight</Link>
            <Link to="/events" className="btn btn-outline">View Events</Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="mission">
            <div className="mission__text">
              <h2>The World Needs More Knights</h2>
              <div className="accent-bar accent-bar--left" />
              <p>
                Our mission is to inspire Catholic men to live out their faith not just in church,
                but in all aspects of their lives. This means taking action, being courageous in
                our brotherhood, and living a purposeful life.
              </p>
              <p>
                You can join us, along with 2 million Catholic men worldwide and over 300
                members of the St. Thomas More Parish, on our mission.
              </p>
              <p>
                The Knights of Columbus, established in 1882 by Father Michael J. McGivney
                and a group of parishioners at St. Mary&apos;s Church in New Haven, Conn., is
                built on the principles of charity, unity, and fraternity. Our purpose is to
                provide financial aid and support to those who are sick, disabled, and in need,
                along with their families.
              </p>
              <Link to="/about" className="btn btn-navy">
                Our Story <FaArrowRight style={{ marginLeft: '0.5rem' }} />
              </Link>
            </div>
            <div className="mission__stats">
              <div className="stat-card">
                <span className="stat-card__number">300+</span>
                <span className="stat-card__label">Brother Knights</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">35+</span>
                <span className="stat-card__label">Years of Service</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">1000s</span>
                <span className="stat-card__label">Volunteer Hours</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__number">1882</span>
                <span className="stat-card__label">Order Founded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith in Action Programs */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Faith in Action Programs</h2>
            <p>Four pillars of service: Charity, Unity, Fraternity, and Patriotism.</p>
            <div className="accent-bar" />
          </div>
          <div className="programs-grid">
            {programs.map(({ icon, title, description }) => (
              <div key={title} className="card program-card">
                <div className="program-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/faith-in-action" className="btn btn-navy">
              View All Programs <FaArrowRight style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Knights in Action</h2>
            <p>A message from our members &mdash; see how we serve.</p>
            <div className="accent-bar" />
          </div>
          <VideoGallery />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://www.youtube.com/@CouncilStThomasMore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy"
            >
              <FaYoutube style={{ marginRight: '0.5rem' }} />
              Watch More Videos
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Stay connected with our council activities and gatherings.</p>
            <div className="accent-bar" />
          </div>
          <div className="events-preview">
            {upcomingEvents.map(({ date, title, location, type }) => (
              <div key={title + date} className="card event-card">
                <div className="event-card__badge">{type}</div>
                <div className="event-card__date">
                  <FaCalendarAlt />
                  <span>{date}</span>
                </div>
                <h3>{title}</h3>
                <p>{location}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/events" className="btn btn-navy">
              Full Event Calendar <FaArrowRight style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Parish */}
      <section className="section">
        <div className="container">
          <div className="parish-section">
            <img
              src="/images/stm-church.jpg"
              alt="St. Thomas More Catholic Church"
              className="parish-section__image"
            />
            <div className="parish-section__text">
              <h2>St. Thomas More: Our Parish</h2>
              <div className="accent-bar accent-bar--left" />
              <p>
                Council 10205 is proudly affiliated with St. Thomas More Catholic Parish in
                Centennial, Colorado. Our council was chartered on December 19, 1989, and has
                been an integral part of the parish community ever since.
              </p>
              <a href="https://www.stthomasmore.org" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                Visit Parish Website <FaArrowRight style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blessed Michael McGivney */}
      <section className="section section-dark mcgivney-section">
        <div className="container">
          <div className="mcgivney">
            <div className="mcgivney__image">
              <img
                src="/FrMcGivney.png"
                alt="Blessed Michael McGivney"
              />
            </div>
            <div className="mcgivney__text">
              <h2 className="mcgivney__title">Blessed Michael McGivney</h2>
              <p className="mcgivney__quote">
                Our Founder understood that men need brotherhood to stay faithful to God&apos;s
                mission. Now he is on the path to sainthood.
              </p>
              <p className="mcgivney__sub">
                Learn more about Blessed Michael McGivney, Founder of the Knights of Columbus.
              </p>
              <a
                href="https://www.kofc.org/who-we-are/our-founder/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Father McGivney&apos;s Legacy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark cta-section">
        <div className="container cta">
          <div className="cta__content">
            <h2>Ready to Answer the Call?</h2>
            <p>
              Join a brotherhood of Catholic men committed to charity, unity, fraternity, and
              patriotism. Become part of something greater than yourself.
            </p>
            <div className="cta__buttons">
              <Link to="/join" className="btn btn-primary">Join the Knights</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
