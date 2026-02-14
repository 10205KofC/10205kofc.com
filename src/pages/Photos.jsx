import './pages.css'

const albums = [
  { title: 'Lenten Fish Frys', count: 12 },
  { title: 'Cruising with the Saints Car Show', count: 18 },
  { title: 'Regina Caeli Retreat 2023', count: 15 },
  { title: 'Camping Trip 2022', count: 10 },
  { title: 'Summer Picnic 2023', count: 8 },
  { title: 'Food Drive', count: 6 },
  { title: 'State Convention', count: 9 },
  { title: 'Spring Work & Prayer Day', count: 11 },
]

const Photos = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Memories from our council events and activities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="photos-grid">
            {albums.map(({ title, count }) => (
              <div key={title} className="card photo-album-card">
                <div className="photo-album-card__image">
                  <div className="photo-album-card__placeholder" />
                  <div className="photo-album-card__overlay">
                    <span>{count} photos</span>
                  </div>
                </div>
                <div className="photo-album-card__body">
                  <h3>{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Photos
