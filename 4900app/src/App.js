import React, { Component } from "react";
import NavBar from "./components/navbar";
import Gainers from "./components/gainers";
import Losers from "./components/losers";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      isOpened: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      showComponent: true,
      isOpened: !this.state.isOpened
    });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <button onClick={this.onButtonClick}>Button</button>
          <div>{this.state.showComponent ? <Gainers /> : <Losers />}</div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
