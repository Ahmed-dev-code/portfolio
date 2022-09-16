import Scrollspy from "react-scrollspy";
import {  useState } from "react";

const Navbar = () => {
  const handleMenu = () => {
    const menu = document.querySelector(".items-container");
    const middle = document.querySelector(".middle");
    const top = document.querySelector(".top");
    const bottom = document.querySelector(".bottom");

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      middle.classList.remove("animate-middle");
      top.classList.remove("animate-top");
      bottom.classList.remove("animate-bottom");
    } else {
      menu.classList.add("open");
      middle.classList.add("animate-middle");
      top.classList.add("animate-top");
      bottom.classList.add("animate-bottom");
    }
  };
  const [activeLink, setActiveLink] = useState("Menu");
  window.addEventListener("scroll", () => {
    const links = document.querySelectorAll(".li.active a");
    const current = links[0].innerHTML;
    if(current !== activeLink) {
      setActiveLink(current);
    }
  } );

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button htmlFor="menu-btn" className="menu-btn" onClick={handleMenu}>
          <div className="humburguer-icon">
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </div>
        </button>
        <h3>{activeLink}</h3>
      </div>

      <ul className="items-container">
        <Scrollspy
          items={["home", "about", "portfolio", "services", "contact"]}
          currentClassName="active"
        >
          <li className="li">
            <a className="item" href="#home">
              Home
            </a>
          </li>
          <li className="li">
            <a className="item" href="#about">
              About
            </a>
          </li>
          <li className="li">
            <a className="item" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="li">
            <a className="item" href="#services">
              Services
            </a>
          </li>
          <li className="li">
            <a className="item" href="#contact">
              Contact
            </a>
          </li>
        </Scrollspy>
      </ul>
    </nav>
  );
};

export default Navbar;
