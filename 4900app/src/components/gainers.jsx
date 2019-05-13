import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../index.css";

import { Card, CardBody, Button, CardHeader } from "reactstrap";

const BASEURL = "https://cloud.iexapis.com/v1/stock/market/list/";
const TYPE = "gainers";
const TOKEN = "?token=pk_b24a0719ee7f4415b33737e51e8ef7f8";

class Gainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isFlipped: false,
      api: this.props.api,
      update: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(BASEURL + this.props.api + TOKEN)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.api !== nextProps.api) {
      this.setState({ update: true });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <main
            className="container"
            className={styles.container}
            className={styles.card}
            className={styles.root}
          >
            <div>
              {items.map(item => (
                <Card body className={styles.card}>
                  <ReactCardFlip
                    isFlipped={this.state.isFlipped}
                    flipDirection="vertical"
                    flipSpeedBackToFront={1}
                    flipSpeedFrontToBack={1}
                  >
                    <div key="front">
                      <div key={item.symbol}>
                        <CardBody>
                          <CardHeader>{item.symbol}</CardHeader>
                          Latest Price: ${item.latestPrice}
                          <br />
                          Change: ${item.change.toFixed(2)}
                          <br />% Change: &nbsp;
                          {(item.changePercent * 100).toFixed(2)}%
                        </CardBody>
                      </div>
                    </div>

                    <div key="back">
                      <div key={item.symbol}>
                        <CardBody>
                          <CardHeader>{item.companyName}</CardHeader>
                          High: ${item.high} <br /> Low: ${item.low}
                          <br />
                          Volume:{" "}
                          {new Intl.NumberFormat().format(item.latestVolume)}
                          <br />
                          Avg Vol:{" "}
                          {new Intl.NumberFormat().format(item.avgTotalVolume)}
                          <br />
                          Market Cap:{" "}
                          {new Intl.NumberFormat().format(item.marketCap)}
                          <br />
                          PE Ratio:{" "}
                          {item.peRatio == null ? "N/A" : item.peRatio}
                        </CardBody>
                      </div>
                    </div>
                  </ReactCardFlip>
                  <br />

                  <Button onClick={this.handleClick} className={styles.button}>
                    More Info...
                  </Button>
                </Card>
              ))}
              {console.log(this.props.update)}
              {console.log(this.props.api)}
            </div>
          </main>
        </React.Fragment>
      );
    }
  }
}

export default Gainers;
