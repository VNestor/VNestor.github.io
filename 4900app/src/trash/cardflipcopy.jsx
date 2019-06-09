import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, CardBody, Button, CardHeader } from "reactstrap";
import GainersAPI from "./GainersAPI";

class CardFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="vertical"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <li key="front">
          <GainersAPI />
          <button onClick={this.handleClick}>Click to flip</button>
        </li>

        <li key="back">
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </li>
      </ReactCardFlip>
    );
  }
}

export default CardFlip;
