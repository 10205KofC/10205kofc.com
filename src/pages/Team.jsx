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
    image: 'https://static.wixstatic.com/media/d5bcb4_29599c28d0e145da971f0e2b24aadf8a~mv2.jpg/v1/fill/w_292,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_29599c28d0e145da971f0e2b24aadf8a~mv2.jpg',
  },
  {
    name: 'Paul Graf',
    role: 'Deputy Grand Knight',
    image: 'https://static.wixstatic.com/media/d5bcb4_ca322f0c4705464eb8fb211064f6c72a~mv2.jpg/v1/fill/w_292,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_ca322f0c4705464eb8fb211064f6c72a~mv2.jpg',
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
    image: 'https://static.wixstatic.com/media/d5bcb4_300c4ba4caa84e588764e59bc759e2ab~mv2.jpeg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_300c4ba4caa84e588764e59bc759e2ab~mv2.jpeg',
  },
  {
    name: 'Jim Russel',
    role: 'Recorder',
    image: 'https://static.wixstatic.com/media/d5bcb4_292d8796379641bb9aa136273c04134f~mv2.jpg/v1/fill/w_292,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_292d8796379641bb9aa136273c04134f~mv2.jpg',
  },
  {
    name: 'Joe Lamb',
    role: 'Lecturer',
    image: null,
  },
  {
    name: 'John Duero',
    role: 'Advocate',
    image: 'https://static.wixstatic.com/media/d5bcb4_4fa979dfa087483b90cec19b4daa02e8~mv2.jpg/v1/fill/w_147,h_166,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_4fa979dfa087483b90cec19b4daa02e8~mv2.jpg',
  },
  {
    name: 'Rodger (Pappy) Goffredi',
    role: 'Warden',
    image: 'https://static.wixstatic.com/media/d5bcb4_414f23d879804cf880e725dbb171362f~mv2.jpg/v1/fill/w_292,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_414f23d879804cf880e725dbb171362f~mv2.jpg',
  },
  {
    name: 'Jim Recker',
    role: 'Outside Guard',
    image: 'https://static.wixstatic.com/media/d5bcb4_0dbf6f6ce2e44b7a919e0712a0e7230d~mv2.png/v1/fill/w_194,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_0dbf6f6ce2e44b7a919e0712a0e7230d~mv2.png',
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
    image: 'https://static.wixstatic.com/media/d5bcb4_5b5e3be9d64c4579a82d7143a6688f12~mv2.jpg/v1/fill/w_292,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_5b5e3be9d64c4579a82d7143a6688f12~mv2.jpg',
  },
  {
    name: 'Armand Bonvicino',
    role: 'Council Director',
    image: 'https://static.wixstatic.com/media/d5bcb4_fefbdbdf68fa4b9fbcdbf9f31be84510~mv2.png/v1/fill/w_292,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_fefbdbdf68fa4b9fbcdbf9f31be84510~mv2.png',
  },
  {
    name: 'Tom Kaiser',
    role: 'Life Director',
    image: 'https://static.wixstatic.com/media/d5bcb4_3857c4e223504d57b810e4a07d6ca244~mv2.jpg/v1/fill/w_152,h_222,al_c,q_80,enc_avif,quality_auto/d5bcb4_3857c4e223504d57b810e4a07d6ca244~mv2.jpg',
  },
  {
    name: 'Dan McCarthy',
    role: 'Membership Director',
    image: null,
  },
  {
    name: 'Tuan Cao',
    role: 'Membership Director',
    image: 'https://static.wixstatic.com/media/d5bcb4_7beda5841bcf467b824978a8b46fbb68~mv2.jpg/v1/fill/w_294,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_7beda5841bcf467b824978a8b46fbb68~mv2.jpg',
  },
]

const trustees = [
  {
    name: 'Darin Gilliland',
    role: '1st Year Trustee',
    image: 'https://static.wixstatic.com/media/d5bcb4_6675240d6154400d927ff6ffaec7afb6~mv2.jpeg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_6675240d6154400d927ff6ffaec7afb6~mv2.jpeg',
  },
  {
    name: 'Tom Reinhardt',
    role: '2nd Year Trustee',
    image: 'https://static.wixstatic.com/media/d5bcb4_2bee33a5c80e427cad321e6085b00d3b~mv2.jpg/v1/fill/w_196,h_196,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_2bee33a5c80e427cad321e6085b00d3b~mv2.jpg',
  },
  {
    name: 'Bobby Rogers',
    role: '3rd Year Trustee',
    image: 'https://static.wixstatic.com/media/d5bcb4_006b3e610e784a158093644532dfbf8d~mv2.jpeg/v1/fill/w_292,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_006b3e610e784a158093644532dfbf8d~mv2.jpeg',
  },
  {
    name: 'Emidio Parziale',
    role: 'Past Grand Knight',
    image: 'https://static.wixstatic.com/media/d5bcb4_83d68bf52f294fe5a2685da0b7a99136~mv2.jpg/v1/fill/w_292,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d5bcb4_83d68bf52f294fe5a2685da0b7a99136~mv2.jpg',
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
