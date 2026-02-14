import { Link } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'
import './pages.css'

const posts = [
  {
    slug: 'cruising-with-the-saints',
    title: '1st Cruising with the Saints Classic Car Show',
    date: 'Summer 2024',
    excerpt: 'A great turnout for our inaugural classic car show. Check out the photos from the event!',
  },
  {
    slug: 'regina-caeli-retreat-2023',
    title: 'Regina Caeli Camp Retreat 2023',
    date: 'Summer 2023',
    excerpt: 'Video and pictures from our annual retreat at the Regina Caeli Retreat Center.',
  },
  {
    slug: 'state-convention',
    title: 'Our Council at State Convention',
    date: '2023',
    excerpt: 'Council 10205 was well represented at the Colorado State Convention this year.',
  },
  {
    slug: 'camping-trip-2022',
    title: 'Knights Camping Trip 2022',
    date: 'Fall 2022',
    excerpt: 'Brotherhood, campfires, and great times in the Colorado outdoors.',
  },
  {
    slug: 'fish-fry-pics',
    title: 'Fish Fry Season Highlights',
    date: 'Lent 2023',
    excerpt: 'Another successful Fish Fry season! See the photos from our Lenten Friday dinners.',
  },
  {
    slug: 'food-drive',
    title: 'Food Drive Success',
    date: '2023',
    excerpt: 'Thanks to all who contributed to our food drive. Check out the amazing results.',
  },
  {
    slug: 'summer-picnic-2023',
    title: '2023 Summer Picnic',
    date: 'Summer 2023',
    excerpt: 'Fun, food, and fellowship at our annual council family picnic.',
  },
]

const News = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>In the News</h1>
          <p>Stories and updates from Council 10205.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {posts.map(({ slug, title, date, excerpt }) => (
              <article key={slug} className="card news-card">
                <div className="news-card__image">
                  <div className="news-card__placeholder" />
                </div>
                <div className="news-card__body">
                  <div className="news-card__date">
                    <FaCalendarAlt /> {date}
                  </div>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
