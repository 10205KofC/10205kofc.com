import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import FaithInAction from './pages/FaithInAction'
import Events from './pages/Events'
import Team from './pages/Team'
import Join from './pages/Join'
import Contact from './pages/Contact'
import News from './pages/News'
import Photos from './pages/Photos'
import FAQ from './pages/FAQ'
import PrayerRequest from './pages/PrayerRequest'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faith-in-action" element={<FaithInAction />} />
        <Route path="events" element={<Events />} />
        <Route path="team" element={<Team />} />
        <Route path="join" element={<Join />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="photos" element={<Photos />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="prayer-request" element={<PrayerRequest />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

const NotFound = () => (
  <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>Page not found. Let&apos;s get you back on track.</p>
      <a href="/" className="btn btn-navy" style={{ marginTop: '1.5rem' }}>Go Home</a>
    </div>
  </section>
)

export default App
