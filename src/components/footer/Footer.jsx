import { Link } from 'react-router-dom'
import { FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaCross } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h3>Knights of Columbus</h3>
            <p className="footer__council">Council 10205</p>
            <p className="footer__parish">
              <FaCross className="footer__icon" />
              St. Thomas More Catholic Parish
            </p>
            <p className="footer__address">
              <FaMapMarkerAlt className="footer__icon" />
              8035 S Quebec St, Centennial, CO 80112
            </p>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faith-in-action">Faith in Action</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/join">Join the Knights</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/news">In the News</Link></li>
              <li><Link to="/prayer-request">Prayer Requests</Link></li>
              <li><a href="https://www.kofc.org" target="_blank" rel="noopener noreferrer">KofC Supreme</a></li>
              <li><a href="https://www.stthomasmore.org" target="_blank" rel="noopener noreferrer">STM Parish</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <div className="footer__social">
              <a href="mailto:kofc.stthomasmore.10205@gmail.com" aria-label="Email us">
                <FaEnvelope />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
            <p className="footer__email">kofc.stthomasmore.10205@gmail.com</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Knights of Columbus Council 10205. All rights reserved.</p>
          <p className="footer__vivat">Vivat Jesus!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
