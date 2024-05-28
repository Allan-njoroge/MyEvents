import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
    const location = useLocation
    const noNavbarRoutes = [ '/login', '/register' ]

  return (
    <>
    { !noNavbarRoutes.includes(location.pathname) && <Navbar /> }
    <Outlet />
    </>
  )
}

export default Layout 