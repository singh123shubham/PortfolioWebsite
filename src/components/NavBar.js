import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/about" className="nav-logo">
            <span>S/SINGH</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/experience"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/education"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/hobbies"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hobbies
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <IoMdClose style={{ color: 'black', fontSize: '2.5rem' }} />{" "}
              </span>
            ) : (
              <span className="icon">
                <IoIosMenu style={{ color: 'black', fontSize: '2.5rem' }}  />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
