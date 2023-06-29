/*import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link className={style.title} to="/"></Link>
      <div className={style.menu} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? style.open : ""}>
        <li>
          <NavLink className={style.Nav1}  to="/home">
            Ipsum
          </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className={style.Nav2} activeClassName={style.active} to="/about">
            Ipsum
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <NavLink className={style.Nav3} activeClassName="active" to="/contact">
            Ipsum
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
        <li>
          <NavLink className={style.Nav4} activeClassName={style.active} to="/Call">
            Ipsum
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;*/


import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link className="title" to="https://media.licdn.com/dms/image/C560BAQH3bitkjT_eTA/company-logo_200_200/0/1519879462020?e=2147483647&v=beta&t=GeMxJYGxlCcJ6Yif4wMQxwIED4j52VTG_IyDIRGl6Ic"></Link>
      <div className="menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink className="Nav1"  to="/home">
           Home
          </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className="Nav2" activeClassName="active" to="/about">
            About
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <NavLink className="Nav3" activeClassName="active" to="/contact">
            Contact
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
        <li>
          <NavLink className="Nav4" activeClassName="active" to="/Call">
            Blog
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

