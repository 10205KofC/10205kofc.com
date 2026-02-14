import './pages.css'

const leadership = [
  {
    name: 'Fr Tom Scherer',
    role: 'Chaplain',
    image: '/FrTomScherer.png',
  },
  {
    name: 'Trey Scarborough',
    role: 'Grand Knight',
    image: '/images/trey-scarborough.jpg',
  },
  {
    name: 'Paul Graf',
    role: 'Deputy Grand Knight',
    image: '/images/paul-graf.jpg',
  },
]

const officers = [
  {
    name: 'Giandri (Mach) Machado',
    role: 'Chancellor',
    image: null,
  },
  {
    name: 'Dennis Smith',
    role: 'Financial Secretary',
    image: null,
  },
  {
    name: 'Walden Walker',
    role: 'Treasurer',
    image: '/images/walden-walker.jpg',
  },
  {
    name: 'Jim Russel',
    role: 'Recorder',
    image: '/images/jim-russel.jpg',
  },
  {
    name: 'Joe Lamb',
    role: 'Lecturer',
    image: null,
  },
  {
    name: 'John Duero',
    role: 'Advocate',
    image: '/images/john-duero.jpg',
  },
  {
    name: 'Rodger (Pappy) Goffredi',
    role: 'Warden',
    image: '/images/rodger-goffredi.jpg',
  },
  {
    name: 'Jim Recker',
    role: 'Outside Guard',
    image: '/images/jim-recker.png',
  },
]

const directors = [
  {
    name: 'TBD',
    role: 'Community Director',
    image: null,
  },
  {
    name: 'Steve Hyatt',
    role: 'Faith/Church Director',
    image: '/images/steve-hyatt.jpg',
  },
  {
    name: 'Armand Bonvicino',
    role: 'Council Director',
    image: '/images/armand-bonvicino.png',
  },
  {
    name: 'Tom Kaiser',
    role: 'Life Director',
    image: '/images/tom-kaiser.jpg',
  },
  {
    name: 'Dan McCarthy',
    role: 'Membership Director',
    image: null,
  },
  {
    name: 'Tuan Cao',
    role: 'Membership Director',
    image: '/images/tuan-cao.jpg',
  },
]

const trustees = [
  {
    name: 'Darin Gilliland',
    role: '1st Year Trustee',
    image: '/images/darin-gilliland.jpg',
  },
  {
    name: 'Tom Reinhardt',
    role: '2nd Year Trustee',
    image: '/images/tom-reinhardt.jpg',
  },
  {
    name: 'Bobby Rogers',
    role: '3rd Year Trustee',
    image: '/images/bobby-rogers.jpg',
  },
  {
    name: 'Emidio Parziale',
    role: 'Past Grand Knight',
    image: '/images/emidio-parziale.jpg',
  },
]

const PersonCard = ({ name, role, image }) => (
  <div className="card team-card">
    {image ? (
      <img src={image} alt={name} className="team-card__photo" />
    ) : (
      <div className="team-card__avatar">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
    )}
    <h3 className="team-card__name">{name}</h3>
    <p className="team-card__role">{role}</p>
  </div>
)

const Team = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Officers &amp; Directors</h1>
          <p>The dedicated leaders who guide Council 10205.</p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Council Leadership</h2>
            <div className="accent-bar" />
          </div>
          <div className="team-leadership">
            {leadership.map(person => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Officers */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Officers</h2>
            <div className="accent-bar" />
          </div>
          <div className="team-grid">
            {officers.map(person => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Directors</h2>
            <div className="accent-bar" />
          </div>
          <div className="team-grid">
            {directors.map(person => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Trustees</h2>
            <div className="accent-bar" />
          </div>
          <div className="team-grid">
            {trustees.map(person => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
