import React, { Component } from "react";
import Gainers from "./gainers";
import styles from "../index.css";

class Home extends Component {
  constructor(props) {
    super(props);
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
      <React.Fragment>
        <main>
          <div className="col text-center">
            Choose a market, then double click refresh.
            <br />
            <button
              type="button"
              className="btn btn-success"
              onClick={this.setGainers}
            >
              Gainers
            </button>
            {"                                                 "}
            <button
              type="button"
              class="btn btn-danger"
              onClick={this.setLosers}
            >
              Losers
            </button>
            <br />
            <br />
            <button onClick={this.onButtonClick} className={styles.buttons}>
              Refresh
            </button>
          </div>
          <div>
            {this.state.showComponent ? <Gainers {...this.state} /> : null}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
