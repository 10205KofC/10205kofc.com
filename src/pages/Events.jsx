import { useState } from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import './pages.css'

const events = [
  {
    id: 1,
    title: 'District Free Throw Contest',
    date: 'Sat, Feb 14, 2026',
    time: '7:00 AM - 11:00 AM',
    location: 'STM Gym',
    category: 'youth',
    description: 'District-level Knights of Columbus Free Throw Championship for local youth.',
  },
  {
    id: 2,
    title: 'Exemplification & Social Meeting',
    date: 'Tue, Feb 17, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'McCallin 2 / Padre / Kitchen',
    category: 'meeting',
    description: 'Exemplification ceremony for new members followed by the monthly social meeting.',
  },
  {
    id: 3,
    title: 'Lenten Fish Fry',
    date: 'Fri, Feb 20, 2026',
    time: '2:00 PM - 9:00 PM',
    location: 'McCallin 1 & 2 / Padre / Kitchen',
    category: 'fundraiser',
    description: 'Join us for our famous Fish Fry dinners! All-you-can-eat fish, sides, and dessert. One of our biggest annual fundraisers.',
  },
  {
    id: 4,
    title: 'Directors Meeting',
    date: 'Thu, Feb 26, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'St. Joseph Room',
    category: 'meeting',
    description: 'Monthly planning meeting for council officers and program directors.',
  },
  {
    id: 5,
    title: 'Lenten Fish Fry',
    date: 'Fri, Feb 27, 2026',
    time: '2:00 PM - 9:00 PM',
    location: 'McCallin 1 & 2 / Padre / Kitchen',
    category: 'fundraiser',
    description: 'Weekly Lenten Fish Fry dinner. Great food and fellowship for the whole family.',
  },
  {
    id: 6,
    title: 'Business Meeting',
    date: 'Tue, Mar 3, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'McCallin 2',
    category: 'meeting',
    description: 'Regular monthly council business meeting. All brother Knights are welcome and encouraged to attend.',
  },
  {
    id: 7,
    title: 'Lenten Fish Fry',
    date: 'Fri, Mar 6, 2026',
    time: '2:00 PM - 9:00 PM',
    location: 'McCallin 1 & 2 / Padre / Kitchen',
    category: 'fundraiser',
    description: 'Weekly Lenten Fish Fry dinner. Great food and fellowship for the whole family.',
  },
  {
    id: 8,
    title: 'Lenten Fish Fry',
    date: 'Fri, Mar 13, 2026',
    time: '2:00 PM - 9:00 PM',
    location: 'McCallin 1 & 2 / Padre / Kitchen',
    category: 'fundraiser',
    description: 'Weekly Lenten Fish Fry dinner. Great food and fellowship for the whole family.',
  },
  {
    id: 9,
    title: 'Staple Boxes',
    date: 'Sat, Mar 14, 2026',
    time: '8:00 AM - 9:30 AM',
    location: 'McCallin 2',
    category: 'community',
    description: 'Help prepare food drive boxes for distribution.',
  },
  {
    id: 10,
    title: 'Pass Out Boxes After Mass',
    date: 'Sat, Mar 14, 2026',
    time: '5:00 PM - 7:00 PM',
    location: 'Narthex',
    category: 'community',
    description: 'Distribute food drive collection boxes to parishioners after Saturday evening Mass.',
  },
  {
    id: 11,
    title: 'Pass Out Boxes After Mass',
    date: 'Sun, Mar 15, 2026',
    time: '7:30 AM - 7:00 PM',
    location: 'Narthex',
    category: 'community',
    description: 'Distribute food drive collection boxes to parishioners after all Sunday Masses.',
  },
  {
    id: 12,
    title: 'Social Meeting',
    date: 'Tue, Mar 17, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'Padre',
    category: 'social',
    description: 'Monthly social meeting. Fellowship, food, and fun with your brother Knights.',
  },
  {
    id: 13,
    title: 'Lenten Fish Fry',
    date: 'Fri, Mar 20, 2026',
    time: '2:00 PM - 9:00 PM',
    location: 'McCallin 1 & 2 / Padre / Kitchen',
    category: 'fundraiser',
    description: 'Weekly Lenten Fish Fry dinner. Great food and fellowship for the whole family.',
  },
  {
    id: 14,
    title: 'Load Food Boxes Before & After Mass',
    date: 'Sat, Mar 21, 2026',
    time: '3:00 PM - 6:00 PM',
    location: 'Parking Lot',
    category: 'community',
    description: 'Help load donated food boxes into vehicles for delivery to families in need.',
  },
  {
    id: 15,
    title: 'Load Food Boxes Before & After Mass',
    date: 'Sun, Mar 22, 2026',
    time: '6:00 AM - 6:00 PM',
    location: 'Parking Lot',
    category: 'community',
    description: 'Help load donated food boxes into vehicles for delivery to families in need.',
  },
  {
    id: 16,
    title: 'Directors Meeting',
    date: 'Thu, Mar 26, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'St. Joseph Room',
    category: 'meeting',
    description: 'Monthly planning meeting for council officers and program directors.',
  },
  {
    id: 17,
    title: 'Lenten Fish Fry',
    date: 'Fri, Mar 27, 2026',
    time: '2:00 PM - 9:00 PM',
    location: 'McCallin 1 & 2 / Padre / Kitchen',
    category: 'fundraiser',
    description: 'Final Lenten Fish Fry of the season. Great food and fellowship for the whole family.',
  },
  {
    id: 18,
    title: 'Business Meeting',
    date: 'Tue, Apr 7, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'McCallin 2',
    category: 'meeting',
    description: 'Regular monthly council business meeting. All brother Knights are welcome.',
  },
  {
    id: 19,
    title: 'State Free Throw Contest',
    date: 'Sat, Apr 11, 2026',
    time: '7:00 AM - 11:00 AM',
    location: 'STM Gym',
    category: 'youth',
    description: 'State-level Knights of Columbus Free Throw Championship.',
  },
  {
    id: 20,
    title: 'Social Meeting',
    date: 'Tue, Apr 21, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'Padre',
    category: 'social',
    description: 'Monthly social meeting. Fellowship, food, and fun with your brother Knights.',
  },
  {
    id: 21,
    title: 'Directors Meeting',
    date: 'Thu, Apr 30, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'St. Joseph Room',
    category: 'meeting',
    description: 'Monthly planning meeting for council officers and program directors.',
  },
  {
    id: 22,
    title: 'Business Meeting',
    date: 'Tue, May 5, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'McCallin 2',
    category: 'meeting',
    description: 'Regular monthly council business meeting. All brother Knights are welcome.',
  },
  {
    id: 23,
    title: 'Social Meeting',
    date: 'Tue, May 19, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'Padre',
    category: 'social',
    description: 'Monthly social meeting. Fellowship, food, and fun with your brother Knights.',
  },
  {
    id: 24,
    title: 'Directors Meeting',
    date: 'Thu, May 28, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'St. Joseph Room',
    category: 'meeting',
    description: 'Monthly planning meeting for council officers and program directors.',
  },
  {
    id: 25,
    title: 'Business Meeting',
    date: 'Tue, Jun 2, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'McCallin 2',
    category: 'meeting',
    description: 'Regular monthly council business meeting. All brother Knights are welcome.',
  },
  {
    id: 26,
    title: 'Knights Council Picnic',
    date: 'Jun 2026 (Date TBD)',
    time: '11:00 AM - 3:00 PM',
    location: 'deKoevend Park',
    category: 'social',
    description: 'Annual council family picnic with food, games, and fellowship.',
  },
  {
    id: 27,
    title: 'Social Meeting',
    date: 'Tue, Jun 16, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'Padre',
    category: 'social',
    description: 'Monthly social meeting. Fellowship, food, and fun with your brother Knights.',
  },
  {
    id: 28,
    title: 'Knights Car Show with STM Days',
    date: 'Sat, Jun 20, 2026',
    time: '7:00 AM - 2:00 PM',
    location: 'Front Parking Lot',
    category: 'social',
    description: '4th Annual Cruising with the Saints Classic Car Show! Bring your ride or just come enjoy the cars, food, and fellowship.',
  },
  {
    id: 29,
    title: 'Popcorn & Cotton Candy at STM Days',
    date: 'Sat, Jun 20, 2026',
    time: '4:00 PM - 9:00 PM',
    location: 'School',
    category: 'community',
    description: 'Knights serve popcorn and cotton candy during STM Days celebration.',
  },
  {
    id: 30,
    title: 'Installation of Officers & Social',
    date: 'Tue, Jun 23, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'McCallin 2 & Padre',
    category: 'meeting',
    description: 'Annual installation ceremony for new council officers followed by a social evening.',
  },
  {
    id: 31,
    title: 'Directors Meeting',
    date: 'Thu, Jun 25, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'St. Joseph Room',
    category: 'meeting',
    description: 'Monthly planning meeting for council officers and program directors.',
  },
  {
    id: 32,
    title: 'Business Meeting',
    date: 'Tue, Jul 7, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'McCallin 2',
    category: 'meeting',
    description: 'Regular monthly council business meeting. All brother Knights are welcome.',
  },
  {
    id: 33,
    title: 'Social Meeting',
    date: 'Tue, Jul 21, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'Padre',
    category: 'social',
    description: 'Monthly social meeting. Fellowship, food, and fun with your brother Knights.',
  },
  {
    id: 34,
    title: 'Directors Meeting',
    date: 'Thu, Jul 30, 2026',
    time: '6:30 PM - 9:00 PM',
    location: 'St. Joseph Room',
    category: 'meeting',
    description: 'Monthly planning meeting for council officers and program directors.',
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
    ? events
    : events.filter(e => e.category === filter)

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
