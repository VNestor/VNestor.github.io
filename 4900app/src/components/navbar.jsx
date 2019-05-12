import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import App from "../App";
import About from "./about";
import Favorites from "./favorites";
import News from "./news";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light navbar-expand-lg  bg-light">
          <a className="navbar-brand" href="/">
            4900 Project
          </a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/*  <a className="nav-link">
                Home <span className="sr-only">(current)</span>
    </a> */}
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              {/*  <a className="nav-link">News</a> */}
              <NavLink to="/News">News</NavLink>
            </li>

            <li className="nav-item">
              {/*  <a className="nav-link">Favorites</a> */}
              <NavLink to="/Favorites">Favorites</NavLink>
            </li>

            <li className="nav-item">
              {/*  <a className="nav-link">About</a> */}
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          <Switch>
            <Route exact={true} path="./App" component={App} />
            <Route exact={true} path="./news" component={News} />
            <Route exact={true} path="./favorites" component={Favorites} />
            <Route exact={true} path="./about" component={About} />
          </Switch>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;