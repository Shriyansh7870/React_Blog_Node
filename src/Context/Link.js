import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import ContextApi from "./ContextApi";
import Home from "../Component/Home";
import Fitness from "../Component/Fitness";
import Technology from "../Component/Technology";
import Food from "../Component/Food";
import Bollywood from "../Component/Bollywood";
import Hollywood from "../Component/Hollywood";
import Navigate from "../Component/Navigate";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <div className="logo">
          <div className="final">
            <div className="the">The</div>
            <div className="siren">Siren</div>
          </div>

          <div className={`Nav ${menuOpen ? "open show" : ""}`}>
            <div className="header-content">
              <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />

              <ul className={`menu ${menuOpen ? "open" : ""}`}>
                <li className="color1">
                  <Link to={"/"} onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/Fitness"} onClick={closeMenu}>
                    Fitness
                  </Link>
                </li>
                <li>
                  <Link to={"/Technology"} onClick={closeMenu}>
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to={"/Bollywood"} onClick={closeMenu}>
                    Bollywood
                  </Link>
                </li>
                <li>
                  <Link to={"/Hollywood"} onClick={closeMenu}>
                    Hollywood
                  </Link>
                </li>
                <li>
                  <Link to="/Food" onClick={closeMenu}>
                    Food
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ContextApi>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bollywood" element={<Bollywood />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/Fitness" element={<Fitness />} />
            <Route path="/Food" element={<Food />} />
            <Route path="/Navigate/:id" element={<Navigate />} />
          </Routes>
        </ContextApi>

        <footer>
          <div className="NavIcons">
            <div className="leftNav">
              <NavLink className="footercolor" to={"/Home"} onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink
                className="footercolor"
                to={"/Fitness"}
                onClick={closeMenu}
              >
                Fitness
              </NavLink>
              <NavLink
                className="footercolor"
                to={"/Technology"}
                onClick={closeMenu}
              >
                Technology
              </NavLink>
              <NavLink
                className="footercolor"
                to={"/Bollywood"}
                onClick={closeMenu}
              >
                Bollywood
              </NavLink>
            </div>

            <p className="footer-content">&copy; 2023 Shriyansh Kumar</p>
            <div className="icons">
              <h2>
                <a
                  href="https://www.instagram.com/shriyansh7870/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </h2>
              <h2>
                <a
                  href="https://github.com/Shriyansh7870"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </h2>
              <h2>
                <a
                  href="https://www.linkedin.com/in/shri7870/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </h2>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
};

export default NavBar;
