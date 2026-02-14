import { Link } from 'react-router-dom'
import { FaArrowRight, FaHeart, FaHandshake, FaUsers, FaFlag } from 'react-icons/fa'
import './pages.css'

const principles = [
  {
    icon: <FaHeart />,
    title: 'Charity',
    text: 'The Catholic faith instructs us to follow the commandment, "Love thy neighbor as thyself." As members of the Knights of Columbus, we demonstrate love for our neighbors through various charitable activities — organizing food drives, providing support to mothers who choose life, and volunteering at Special Olympics events. We believe there is no greater way to experience love and compassion than by reaching out to those in need.',
  },
  {
    icon: <FaHandshake />,
    title: 'Unity',
    text: 'As the saying goes, "None of us is as good as all of us." We understand that we can achieve far more by working together than by acting alone. As a Knight of Columbus, you can rely on the backing and motivation of your fellow Knights as you strive to make a positive impact on your parish and community.',
  },
  {
    icon: <FaUsers />,
    title: 'Fraternity',
    text: 'The Knights of Columbus was established by Blessed Michael J. McGivney with the primary aim of supporting widows and children left without a breadwinner. To this day, the Order remains true to its founding mission through its acclaimed insurance program and through individual Knights performing good deeds — contributing more than 75.6 million service hours.',
  },
  {
    icon: <FaFlag />,
    title: 'Patriotism',
    text: 'Knights of Columbus members are unwaveringly patriotic citizens. We take great pride in our commitment to both God and country and are unafraid to defend them both. Through our actions and words, we demonstrate that Catholics can be staunch supporters of their nations and are among the finest citizens in the world.',
  },
]

const About = () => {
  return (
    <>
      <section className="page-hero page-hero--image">
        <img
          src="https://static.wixstatic.com/media/d5bcb4_982401b5dfdc4de1814c8af0e245e8c6~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_982401b5dfdc4de1814c8af0e245e8c6~mv2.jpg"
          alt="Knights of Columbus Council 10205"
          className="page-hero__bg-image"
        />
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <h1>We Are Men on a Mission</h1>
          <p>Over three decades of faith, service, and brotherhood.</p>
        </div>
      </section>

      {/* Council History */}
      <section className="section">
        <div className="container content-block">
          <h2>Our Council&apos;s Story</h2>
          <div className="accent-bar accent-bar--left" />
          <p>
            Council 10205, St. Thomas More, was chartered by the Supreme Council of the Knights
            of Columbus on <strong>December 19, 1989</strong>. Our founding officers were
            Raymond (Ray) F. O&apos;Shea as Grand Knight, Jack Lannen as Financial Secretary,
            and Hap Carpenter as Deputy Grand Knight. Father Michael Walsh was the first
            Chaplain and attended every meeting.
          </p>
          <p>
            Council 10205 is affiliated with St. Thomas More Parish in Centennial, Colorado,
            and currently includes <strong>over 300 members</strong>.
          </p>
          <p>
            For over thirty years, council members have donated countless hours of service in
            support of our parish and the local community. Our specific areas of focus are
            Church, Youth, Council, Community, and Family. Our members have raised and donated
            tens of thousands of dollars to various charities and volunteer organizations
            through Council Bingo programs, Lenten Fish Frys, and Bronco ticket raffles.
          </p>
          <p>
            We support our Seminarians financially and provide sweat labor for members of our
            community in need. Twice each year, we collect tons of nonperishable food items
            and gift cards for local food banks. Our annual Parish Italian Night and Lenten
            Fish Frys have entertained St. Thomas More parishioners for years. Our Coats for
            Kids program provides warm coats and gloves for children on Indian Reservations
            and local charities.
          </p>
          <p>
            One of our top priorities is the spirituality of our members. Each meeting begins
            by reciting the Rosary and all activities begin with prayer. Annual retreats are
            held for council members and men of the parish. Council 10205 has won many awards
            over the years from the Colorado State Council and continues to be one of the
            leading councils in the state.
          </p>
        </div>
      </section>

      {/* Four Principles */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Our Principles</h2>
            <p>4 Principles. 4 Reasons. One Brotherhood.</p>
            <div className="accent-bar" />
          </div>
          <div className="principles-grid">
            {principles.map(({ icon, title, text }) => (
              <div key={title} className="card principle-card">
                <div className="principle-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KoC History */}
      <section className="section">
        <div className="container content-block">
          <h2>Knights of Columbus History</h2>
          <div className="accent-bar accent-bar--left" />
          <p>
            The history of the Knights of Columbus begins with its founding in 1882 by
            Father Michael J. McGivney at St. Mary&apos;s Parish in New Haven, Connecticut.
            The Knights of Columbus was initially a mutual benefit society for a membership
            of practicing male Catholics.
          </p>
          <p>
            Today, it advocates for Catholic causes and provides a range of philanthropic
            and support services to Catholic institutions worldwide. It is also one of the
            world&apos;s largest insurance companies and operates the shrine to Pope John
            Paul II in Washington, D.C.
          </p>
          <p>
            The order was designed to foster members&apos; pride in both their Catholic and
            American heritages. It expanded beyond Connecticut and the United States to
            establish its first international councils by 1905. The organization provided
            relief to soldiers in wars throughout the 20th century and fought anti-Catholic
            and racial prejudice.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-alt">
        <div className="container content-block">
          <h2>What We Do</h2>
          <div className="accent-bar accent-bar--left" />
          <div className="activities-grid">
            <div className="card activity-card">
              <h3>Parish Support</h3>
              <ul className="activity-list">
                <li>Regina Caeli Work &amp; Prayer Days</li>
                <li>Stewardship of Time &amp; Talent Weekend</li>
                <li>40 Hours Devotion</li>
                <li>Holy Hour Sessions</li>
                <li>Adult Religious Education Classes</li>
                <li>Corporate Communion Breakfasts</li>
              </ul>
            </div>
            <div className="card activity-card">
              <h3>Fundraising</h3>
              <ul className="activity-list">
                <li>Lenten Fish Frys</li>
                <li>Annual Peach Sales</li>
                <li>Bronco Ticket Raffles</li>
                <li>Council Bingo Programs</li>
                <li>Hog Roast Fundraiser</li>
                <li>A Taste of Italy Dinner</li>
              </ul>
            </div>
            <div className="card activity-card">
              <h3>Community Service</h3>
              <ul className="activity-list">
                <li>Food Drives (Easter &amp; Christmas)</li>
                <li>Tootsie Roll Drives</li>
                <li>Coats for Kids Program</li>
                <li>Winter Clothing Drives</li>
                <li>Free Throw Championships</li>
                <li>Eagle Scout Project Support</li>
              </ul>
            </div>
            <div className="card activity-card">
              <h3>Fellowship</h3>
              <ul className="activity-list">
                <li>Council Family Picnic</li>
                <li>Camping &amp; Glamping Trips</li>
                <li>Steak &amp; Cigar Night</li>
                <li>Cruising with the Saints Car Show</li>
                <li>Wives &amp; Widows Appreciation Dinner</li>
                <li>Beer &amp; Pizza Night</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark cta-section">
        <div className="container cta">
          <div className="cta__content">
            <h2>Meet the Team</h2>
            <p>Get to know the officers and directors who lead Council 10205.</p>
            <Link to="/team" className="btn btn-primary">
              Our Officers <FaArrowRight style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
