import { useState } from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import './pages.css'

const sampleEvents = [
  {
    id: 1,
    title: "Fish Fry's - 2026 Lent Season",
    date: 'Fridays during Lent, starting Feb 20',
    time: '4:00 PM - 7:00 PM',
    location: 'St. Thomas More Church',
    category: 'fundraiser',
    description: "Join us for our famous Fish Fry dinners! All-you-can-eat fish, sides, and dessert. One of our biggest annual fundraisers supporting council charities.",
  },
  {
    id: 2,
    title: 'Monthly Social Meeting',
    date: '4th Tuesday of Each Month',
    time: '7:00 PM',
    location: 'St. Thomas More Catholic Church',
    category: 'social',
    description: 'Fellowship, food, and fun with your brother Knights. Bring a friend who might be interested in joining!',
  },
  {
    id: 3,
    title: 'Monthly Business Meeting',
    date: '1st Tuesday of Each Month',
    time: '7:00 PM',
    location: 'St. Thomas More Catholic Church',
    category: 'meeting',
    description: 'Regular council business meeting. All brother Knights are welcome and encouraged to attend.',
  },
  {
    id: 4,
    title: 'Officers & Directors Meeting',
    date: '4th Thursday of Each Month',
    time: '7:00 PM',
    location: 'St. Thomas More - St. Joseph Room',
    category: 'meeting',
    description: 'Planning meeting for council officers and program directors.',
  },
  {
    id: 5,
    title: 'PRAY at Planned Parenthood',
    date: 'Select Fridays',
    time: 'Various',
    location: 'Planned Parenthood',
    category: 'faith',
    description: 'Knights of Columbus prayer vigil. Stand up for the sanctity of life through peaceful prayer.',
  },
  {
    id: 6,
    title: 'Knights Shirts at Masses',
    date: 'Select Weekends',
    time: 'All Masses',
    location: 'St. Thomas More',
    category: 'community',
    description: 'Show your Knights pride! Wear your KoC shirts to Mass on designated weekends.',
  },
  {
    id: 7,
    title: 'Food Drive 2026 Campaign',
    date: 'Sat, Mar 14',
    time: 'After All Masses',
    location: 'St. Thomas More',
    category: 'community',
    description: 'Distribution day — help pass out food collection boxes after all Masses.',
  },
  {
    id: 8,
    title: 'Free Throw Championship',
    date: 'Sat, Mar 21',
    time: 'TBD',
    location: 'St. Thomas More Catholic School (Gym)',
    category: 'youth',
    description: 'Knights of Columbus Free Throw Championship for local youth. Come cheer on the kids!',
  },
  {
    id: 9,
    title: 'Regina Caeli Work & Prayer - Summer 2026',
    date: 'Sat, May 16 (Early June TBD)',
    time: 'TBD',
    location: 'Regina Caeli Hermitage',
    category: 'faith',
    description: 'A day of work and prayer at the Regina Caeli Retreat Center. Stay tuned for the exact date.',
  },
  {
    id: 10,
    title: '4th Annual Cruising with the Saints Classic Car Show',
    date: 'Sat, Jun 20',
    time: 'TBD',
    location: 'Southeast Parking Lot of STM',
    category: 'social',
    description: 'Our annual classic car show! Bring your ride or just come enjoy the cars, food, and fellowship.',
  },
  {
    id: 11,
    title: 'Installation of Officers & Social Evening',
    date: 'Tue, Jun 23',
    time: 'TBD',
    location: 'McAllin Hall II/Padre - St. Thomas More',
    category: 'meeting',
    description: 'Annual installation ceremony for new council officers followed by a social evening.',
  },
  {
    id: 12,
    title: 'Raffle for 2026 Denver Broncos Tickets',
    date: 'Summer 2026',
    time: 'TBD',
    location: 'St. Thomas More',
    category: 'fundraiser',
    description: 'Annual Broncos ticket raffle — a beloved council fundraising tradition. Stay tuned for details!',
  },
  {
    id: 13,
    title: 'Summer Picnic at deKoevend Park',
    date: 'Summer 2026 (Date TBD)',
    time: 'TBD',
    location: 'deKoevend Park',
    category: 'social',
    description: 'Annual council family picnic with food, games, and fellowship.',
  },
  {
    id: 14,
    title: 'Knights Glamping Trip 2026',
    date: 'Summer 2026',
    time: 'Weekend Trip',
    location: 'Regina Caeli',
    category: 'social',
    description: 'Brotherhood, campfires, and the great Colorado outdoors. Stay tuned for summer dates!',
  },
  {
    id: 15,
    title: 'Annual Peach Fundraiser 2026',
    date: 'Fri, Aug 28',
    time: 'TBD',
    location: 'St. Thomas More - The Padre Restaurant',
    category: 'fundraiser',
    description: 'Our popular annual peach sale fundraiser. Fresh Colorado peaches supporting council programs.',
  },
  {
    id: 16,
    title: 'Beer & Pizza Night - Men For All Seasons',
    date: 'Tue, Sep 01',
    time: 'TBD',
    location: 'St. Thomas More - McCallin 2/Padre',
    category: 'social',
    description: 'Beer, pizza, and brotherhood. A joint event with Men For All Seasons and Knights of Columbus.',
  },
]

const categories = [
  { value: 'all', label: 'All Events' },
  { value: 'faith', label: 'Faith' },
  { value: 'meeting', label: 'Meetings' },
  { value: 'social', label: 'Social' },
  { value: 'fundraiser', label: 'Fundraisers' },
  { value: 'community', label: 'Community' },
  { value: 'youth', label: 'Youth' },
]

const Events = () => {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? sampleEvents
    : sampleEvents.filter(e => e.category === filter)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Events</h1>
          <p>Stay connected with council meetings, fundraisers, and community gatherings.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="events-filter">
            {categories.map(({ value, label }) => (
              <button
                key={value}
                className={`events-filter__btn ${filter === value ? 'events-filter__btn--active' : ''}`}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="events-list">
            {filtered.map(({ id, title, date, time, location, description, category }) => (
              <div key={id} className="card event-detail-card">
                <div className="event-detail-card__badge">{category}</div>
                <h3>{title}</h3>
                <div className="event-detail-card__meta">
                  <span><FaCalendarAlt /> {date}</span>
                  <span><FaClock /> {time}</span>
                  <span><FaMapMarkerAlt /> {location}</span>
                </div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Events
