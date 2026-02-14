import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './nav.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/faith-in-action', label: 'Faith in Action' },
  { path: '/events', label: 'Events' },
  { path: '/news', label: 'News' },
  { path: '/photos', label: 'Photos' },
  { path: '/join', label: 'Join Us' },
  { path: '/contact', label: 'Contact' },
]

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <div className="navbar__logo-emblem">KC</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Knights of Columbus</span>
            <span className="navbar__logo-subtitle">Council 10205 &bull; St. Thomas More</span>
          </div>
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
                onClick={closeMenu}
                end={path === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  )
}

export default Nav
