import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'
import './pages.css'

const benefits = [
  'Be part of a global Catholic brotherhood of nearly 2 million men',
  'Grow in your faith through prayer, devotion, and spiritual programs',
  'Serve your parish, community, and those in need',
  'Build lasting friendships with fellow Catholic men',
  'Access to Knights of Columbus insurance and financial products',
  'Leadership development and mentorship opportunities',
  'Family-oriented events, retreats, and social gatherings',
  'Make a real, tangible difference in people\'s lives',
]

const Join = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Become a Knight</h1>
          <p>Answer the call. Join a brotherhood committed to charity, unity, fraternity, and patriotism.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="join-layout">
            <div className="join-benefits">
              <h2>Why Join the Knights?</h2>
              <div className="accent-bar accent-bar--left" />
              <ul className="benefits-list">
                {benefits.map(benefit => (
                  <li key={benefit}>
                    <FaCheckCircle className="benefit-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="join-action">
              <div className="card join-card">
                <h3>Ready to Join?</h3>
                <p>
                  Any practical Catholic man in good standing with the Church, who is at least
                  18 years old, is eligible to join the Knights of Columbus.
                </p>
                <div className="join-steps">
                  <div className="join-step">
                    <span className="join-step__num">1</span>
                    <div>
                      <strong>Sign Up Online</strong>
                      <p>Join at kofc.org with our council number: <strong>10205</strong></p>
                    </div>
                  </div>
                  <div className="join-step">
                    <span className="join-step__num">2</span>
                    <div>
                      <strong>Attend a Meeting</strong>
                      <p>Come to one of our monthly social meetings to meet the brothers.</p>
                    </div>
                  </div>
                  <div className="join-step">
                    <span className="join-step__num">3</span>
                    <div>
                      <strong>Exemplification</strong>
                      <p>Complete the exemplification ceremony to become a full Knight.</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.kofc.org/en/join/join-the-knights.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '1.5rem' }}
                >
                  Join Online at KofC.org <FaExternalLinkAlt style={{ marginLeft: '0.5rem', fontSize: '0.85rem' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Join
