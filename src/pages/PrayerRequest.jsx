import { useState } from 'react'
import { FaPray } from 'react-icons/fa'
import './pages.css'

const PrayerRequest = () => {
  const [formData, setFormData] = useState({ name: '', email: '', request: '', anonymous: false })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
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
          <h1>Prayer Requests</h1>
          <p>Let us lift your intentions in prayer.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="content-block" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <FaPray style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1rem' }} />
            <p>
              Our council maintains an active prayer chain. Submit your prayer intention below
              and our brother Knights will keep you and your loved ones in their prayers.
              All requests are treated with confidentiality and respect.
            </p>
          </div>

          {submitted ? (
            <div className="card contact-success">
              <h3>Prayer Received</h3>
              <p>Your intention has been received. Our brothers will keep you in their prayers. God bless you.</p>
            </div>
          ) : (
            <form className="card contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email (optional)</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="request">Prayer Intention</label>
                <textarea id="request" name="request" rows="5" value={formData.request} onChange={handleChange} required />
              </div>
              <div className="form-group form-group--checkbox">
                <input type="checkbox" id="anonymous" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
                <label htmlFor="anonymous">Keep my request anonymous</label>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Prayer Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export default PrayerRequest
