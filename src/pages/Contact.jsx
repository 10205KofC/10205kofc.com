import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaCross } from 'react-icons/fa'
import './pages.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate with EmailJS or backend
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you. Reach out to Council 10205.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="accent-bar accent-bar--left" />

              <div className="contact-item">
                <FaEnvelope className="contact-item__icon" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:kofc.stthomasmore.10205@gmail.com">kofc.stthomasmore.10205@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-item__icon" />
                <div>
                  <strong>Location</strong>
                  <p>8035 S Quebec St<br />Centennial, CO 80112</p>
                </div>
              </div>

              <div className="contact-item">
                <FaCross className="contact-item__icon" />
                <div>
                  <strong>Parish</strong>
                  <p>St. Thomas More Catholic Parish</p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-item__icon" />
                <div>
                  <strong>Meetings</strong>
                  <p>2nd &amp; 4th Tuesday of each month at 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="card contact-success">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent. We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="card contact-form" onSubmit={handleSubmit}>
                  <h3>Send a Message</h3>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
