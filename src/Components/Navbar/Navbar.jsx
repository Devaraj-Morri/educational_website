import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'

export const Navbar = () => {
  //---- when navbar scroll color will be changed ------- //

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 510 ? setSticky(true) : setSticky(false);
    });
  }, []);

  //----------- hamburger functionality---------- //
  const [mobileMenu,setMobileMenu]=useState(false)
  const taggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?"":'hide-menu-icon'}>
        <li>
          <Link to="hero" smooth={true} offset={-160}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-215}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-220}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-230}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-220}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={taggleMenu}/>
    </nav>
  );
};
