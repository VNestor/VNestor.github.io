import React, { Component } from "react";

class GainersAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gainers: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://cloud.iexapis.com/v1/stock/market/list/gainers?token=pk_b24a0719ee7f4415b33737e51e8ef7f8"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          gainers: json
        });
      });
  }

  render() {
    var { isLoaded, gainers } = this.state;
    if (!isLoaded) {
      return <div>Loading Data...</div>;
    } else {
      return (
        <div>
          {gainers.map(gainer => (
            <div key={gainer.symbol}>{gainer.latestPrice}</div>
          ))}
        </div>
      );
    }
  }
}

export default GainersAPI;
