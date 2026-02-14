import { FaPray, FaUsers, FaChild, FaHeart, FaHandsHelping } from 'react-icons/fa'
import { GiSwordBrandish } from 'react-icons/gi'
import './pages.css'

const pillars = [
  {
    icon: <FaPray />,
    title: 'Faith',
    color: '#003366',
    items: [
      'Holy Hour Sessions',
      'Prayer in the Square Series',
      'Pentecost Vigil',
      '40 Hours Devotion',
      "Men's Advent Retreat",
      'Monthly Adult Religious Education',
      'Corporate Communion Breakfasts',
      'Faith Corner Resources',
    ],
  },
  {
    icon: <FaHandsHelping />,
    title: 'Community',
    color: '#8b1a1a',
    items: [
      'Lenten Fish Frys',
      'Food Drives (Easter & Christmas)',
      'Tootsie Roll Drives',
      'Winter Coat & Clothing Drives',
      'Regina Caeli Work & Prayer Days',
      'Peach Sales Fundraiser',
      'Bingo Programs',
      'Charitable Donations',
    ],
  },
  {
    icon: <FaChild />,
    title: 'Family',
    color: '#2d6a2e',
    items: [
      'Council Family Picnic',
      'Kids Christmas Party',
      'Gingerbread Bake',
      'Wives & Widows Appreciation Dinner',
      'Camping & Glamping Trips',
      'A Taste of Italy Dinner',
      "St. Patrick's Day Dinner/Dance",
      'Oktoberfest / Italian Night',
    ],
  },
  {
    icon: <GiSwordBrandish />,
    title: 'Life',
    color: '#c8a951',
    items: [
      'Defending the Sanctity of Life',
      'Supporting Mothers in Need',
      'March for Life Participation',
      'Prayer Vigils',
      'Special Olympics Support',
      'Ultrasound Initiative',
    ],
  },
]

const FaithInAction = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Faith in Action</h1>
          <p>Our four pillars of service: Faith, Community, Family, and Life.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <p>
              The Knights of Columbus Faith in Action model empowers councils to serve effectively
              through programs built around four key categories. Council 10205 is proud to be
              active across all four pillars.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map(({ icon, title, items, color }) => (
              <div key={title} className="card pillar-card">
                <div className="pillar-card__header" style={{ borderTopColor: color }}>
                  <div className="pillar-card__icon" style={{ color }}>{icon}</div>
                  <h2>{title}</h2>
                </div>
                <ul className="pillar-card__list">
                  {items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Youth Programs</h2>
            <div className="accent-bar" />
          </div>
          <div className="activities-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card activity-card">
              <h3>Youth Activities</h3>
              <ul className="activity-list">
                <li>Free Throw Championship</li>
                <li>Essay Contests for STM School</li>
                <li>Boy Scout Support &amp; Eagle Scout Projects</li>
                <li>Youth Mission Trip Support</li>
                <li>Kids Christmas Party at STM School</li>
              </ul>
            </div>
            <div className="card activity-card">
              <h3>Scholarships &amp; Support</h3>
              <ul className="activity-list">
                <li>Support for STM School Programs</li>
                <li>Youth Sports Sponsorships</li>
                <li>Community Youth Outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaithInAction
