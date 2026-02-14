import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './pages.css'

const faqs = [
  {
    q: 'What are the Knights of Columbus?',
    a: 'The Knights of Columbus is the world\'s largest Catholic fraternal service organization. Founded in 1882 by Blessed Michael McGivney, the Knights are dedicated to the principles of charity, unity, fraternity, and patriotism.',
  },
  {
    q: 'Who can join the Knights?',
    a: 'Any practical Catholic man in good standing with the Church, who is at least 18 years old, is eligible to become a Knight. You do not need to be a member of St. Thomas More Parish to join Council 10205.',
  },
  {
    q: 'How do I join Council 10205?',
    a: 'You can join online at kofc.org using our council number 10205, or simply come to one of our monthly social meetings on the 4th Tuesday of the month. Any brother Knight will be happy to help you get started.',
  },
  {
    q: 'When do you meet?',
    a: 'Business meetings are held on the 2nd Tuesday of each month at 7:00 PM. Social meetings are on the 4th Tuesday at 7:00 PM. Officers & Directors meet on the 1st Tuesday. All meetings are at the STM Parish Center.',
  },
  {
    q: 'What is the Fish Fry?',
    a: 'Every Friday during Lent, our council hosts an all-you-can-eat Fish Fry dinner at the parish hall from 4:00-7:00 PM. It\'s one of our biggest fundraisers and a beloved community tradition. All are welcome!',
  },
  {
    q: 'How much are dues?',
    a: 'Annual dues are set by the council and are very reasonable. Contact us or ask any Knight at a meeting for current dues information.',
  },
  {
    q: 'Do I have to attend every meeting?',
    a: 'No. While regular attendance is encouraged, we understand that family and work come first. Participate as much as your schedule allows.',
  },
  {
    q: 'What is the Fourth Degree?',
    a: 'The Fourth Degree is the patriotic degree of the Knights of Columbus. After becoming a Third Degree Knight, members may choose to join a Fourth Degree Assembly, which focuses on patriotism and civic engagement.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Common questions about the Knights of Columbus and Council 10205.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="faq-list">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button className="faq-item__question" onClick={() => toggle(i)}>
                  <span>{q}</span>
                  <FaChevronDown className="faq-item__chevron" />
                </button>
                <div className="faq-item__answer">
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
