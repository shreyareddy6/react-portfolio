import { Link, useLocation } from 'react-router-dom';

import './Navbar.css'
import logo from'../../assets/logo_img.png'

const Navbar = () => {
  const currentPage = useLocation().pathname;
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>
              <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'my-nav-link-active' : 'my-nav-link'}
        >
              Home
              </Link></li>
            <li>        
              <Link
          to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'my-nav-link-active' : 'my-nav-link'}
        >
          About
        </Link></li>
            <li>
            <Link
          to="/MyWork"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/MyWork' ? 'my-nav-link-active' : 'my-nav-link'}
        >My Work
        </Link></li>
            <li>
            <Link
          to="/Contact"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'my-nav-link-active' : 'my-nav-link'}
        >
              Contact
              </Link></li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar