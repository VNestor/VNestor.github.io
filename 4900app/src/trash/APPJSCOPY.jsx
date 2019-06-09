import React, { Component } from "react";
import NavBar from "./components/navbar";
import Gainers from "./components/gainers";
import Losers from "./components/losers";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: true,
      api: "gainers"
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

  setGainers() {
    this.setState(
      { api: "gainers" },
      state => ({ showComponent: !state.showComponent }),
      this.otherFunction
    );
  }

  setLosers() {
    this.setState(
      { api: "losers" },
      state => ({ showComponent: !state.showComponent }),
      this.otherFunction
    );
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <button onClick={this.setGainers}>Gainers</button>
          <button onClick={this.setLosers}>Losers</button>
          <button onClick={this.onButtonClick}>Button</button>
          <div>
            <Gainers {...this.state} />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;




showComponent: this.props.showComponent
this.onButtonClick = this.onButtonClick.bind(this);
onButtonClick() {
  this.setState(state => ({
    showComponent: !state.showComponent
  }));
}

{this.state.showComponent ? (
  <Gainers {...this.state} />
) : (
  <Gainers {...this.state} />
)}
{console.log(this.props.showComponent)}

setGainers() {
  this.setState(
    { api: "gainers" },
    state => ({ showComponent: !state.showComponent }),
    this.otherFunction
  );
}

setLosers() {
  this.setState(
    { api: "losers" },
    state => ({ showComponent: !state.showComponent }),
    this.otherFunction
  );
}