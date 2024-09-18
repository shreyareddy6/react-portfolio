import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_img.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const currentPage = useLocation().pathname;
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo_img" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <Link
            to="/"
            className={
              currentPage === "/" ? "my-nav-link-active" : "my-nav-link"
            }
          >
            Home
            {currentPage === "/" && (
              <img src={underline} alt="underline" className="underline-img" />
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className={
              currentPage === "/About" ? "my-nav-link-active" : "my-nav-link"
            }
          >
            About
            {currentPage === "/About" && (
              <img src={underline} alt="underline" className="underline-img" />
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/MyWork"
            className={
              currentPage === "/MyWork" ? "my-nav-link-active" : "my-nav-link"
            }
          >
            My Work
            {currentPage === "/MyWork" && (
              <img src={underline} alt="underline" className="underline-img" />
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "my-nav-link-active" : "my-nav-link"
            }
          >
            Contact
            {currentPage === "/Contact" && (
              <img src={underline} alt="underline" className="underline-img" />
            )}
          </Link>
        </li>
      </ul>
      <div className="nav-connect">
        <Link to="/Contact">Connect with me</Link>
      </div>
    </div>
  );
};

export default Navbar;
