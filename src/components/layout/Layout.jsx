import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
