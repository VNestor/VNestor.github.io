import React, { Component } from "react";
import NavBar from "./components/navbar";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Search from "./components/search";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route path="/" exact={true} component={Home} />
          <Route path="/News" exact={true} component={News} />
          <Route path="/About" exact={true} component={About} />
          <Route path="/Search" exact={true} component={Search} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
