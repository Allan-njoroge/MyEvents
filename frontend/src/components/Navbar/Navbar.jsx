import { useState } from "react";
import "./Navbar.css";
import DarkLogo from "../../assets/dark-logo.png";
import { Link } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Create Event", link: "/create" },
    { name: "My Events", link: "/events" },
    { name: "Profile", link: '/profile' }
  ];

  const toggleMenu = () => {
    if(menuOpen === true) return setMenuOpen(false);

    setMenuOpen(true)
  }

  return (
    <div class="navbar-container">
      <nav>
        {/* logo */}
        <Link to={'/'}><img src={DarkLogo} alt="logo" className="logo"/></Link>

        {/*--navigation links--*/}
        <ul className={`nav-links ${ menuOpen ?  'menuOpened' : 'menuClosed' }`}>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          {/*--login and logout btn--*/}
          {login ? (
            <Link>
              <button className="pry-btn">Logout</button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="pry-btn">Get Started</button>
            </Link>
          )}
        </ul>

          {/*--toggle menu button--*/}
          <span className="menu-icon" onClick={toggleMenu}>{menuOpen ? <RiCloseFill /> : <RiMenuFill />}</span>

      </nav>
    </div>
  );
};

export default Navbar;
