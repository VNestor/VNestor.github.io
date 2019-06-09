import React, { Component } from "react";
import NavBar from "./components/navbar";
import Gainers from "./components/gainers";
import Losers from "./components/losers";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./index.css";
import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: true,
      api: ""
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.setGainers = this.setGainers.bind(this);
    this.setLosers = this.setLosers.bind(this);
  }

  onButtonClick() {
    this.setState(state => ({
      showComponent: !state.showComponent
    }));
  }

  setGainers = evt => {
    this.setState({ api: "gainers" }, this.otherFunction);
  };

  setLosers = evt => {
    this.setState({ api: "losers" }, this.otherFunction);
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />

          <Route path="/News" exact={true} component={News} />
          <Route path="/About" exact={true} component={About} />
          <div className={styles.container}>
            <div className={styles.buttons}>
              Show:
              <button onClick={this.setGainers} className={styles.buttons}>
                Gainers
              </button>
              <button onClick={this.setLosers} className={styles.buttons}>
                Losers
              </button>
              <button onClick={this.onButtonClick} className={styles.buttons}>
                Button
              </button>
            </div>
            <div>
              {this.state.showComponent ? null : <Gainers {...this.state} />}
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
