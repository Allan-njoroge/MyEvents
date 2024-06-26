import { useContext, useState } from "react";
import "./Navbar.css";
import DarkLogo from "../../assets/dark-logo.png";
import { Link } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser, logout } = useContext(AuthContext)

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Profile", link: '/profile' }
  ];

  const toggleMenu = () => {
    if(menuOpen === true) return setMenuOpen(false);

    setMenuOpen(true)
  }
  const clickLinks = () => {
    setMenuOpen(false)
  }
  const handleLogout = () => {
    logout()
    clickLinks()
  }

  return (
    <div className="navbar-container">
      <nav>
        {/* logo */}
        <Link to={'/'}><img src={DarkLogo} alt="logo" className="logo"/></Link>

        {/*--navigation links--*/}
        <ul className={`nav-links ${ menuOpen ?  'menuOpened' : 'menuClosed' }`}>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.link} onClick={clickLinks}>{item.name}</Link>
            </li>
          ))}
          {/*--login and logout btn--*/}
          {currentUser ? (
            <Link>
              <button className="pry-btn" onClick={handleLogout}>Logout</button>
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
