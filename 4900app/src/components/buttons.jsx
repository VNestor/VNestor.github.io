import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      succeed: false,
      type: [
        {
          id: 0,
          title: "gainers",
          selected: false
        },
        { id: 1, title: "losers", selected: false }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(state => ({
      succeed: !state.succeed
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={this.handleClick}
            type="button"
            class="btn btn-secondary"
          >
            Gainers
          </button>
          <button type="button" class="btn btn-secondary">
            Losers
          </button>
          <button type="button" class="btn btn-secondary">
            Right
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
