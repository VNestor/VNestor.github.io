import React, { Component } from "react";
import NavBar from "./components/navbar";
import Gainers from "./components/gainers";
import Losers from "./components/losers";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
      api: "gainers"
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState(state => ({
      showComponent: !state.showComponent
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <button onClick={() => this.setState({ api: "gainers" })}>
            Gainers
          </button>
          <button onClick={() => this.setState({ api: "losers" })}>
            Losers
          </button>
          <button onClick={this.onButtonClick}>Button</button>
          <div>
            {this.state.showComponent ? null : <Gainers {...this.state} />}
            {console.log(this.props.showComponent)}
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
