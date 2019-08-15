/** 
 Navbar component
 Uses react-router-dom to link various components
 */

import React, { Component } from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light navbar-expand-lg  bg-light">
          <a className="navbar-brand" href="/">
            4900 Project
          </a>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/">Home</NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/News">News</NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/Search">Search</NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <NavLink to="/About">About</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
