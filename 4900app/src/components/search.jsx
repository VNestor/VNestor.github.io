/** 
 Search Component
 Query updates as stock is being typed, 
 displays card when stock symbol match is found.
 Known Issues:
 -toFixed() of null crashes app when no data available
 -404 error in console*/

import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../index.css";
import { Card, CardBody, Button, CardHeader } from "reactstrap";

const BASEURL = "https://cloud.iexapis.com/v1/stock/";
const TOKEN = `${process.env.REACT_APP_IEX_KEY}`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      isFlipped: false,
      isLoaded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getInfo = () => {
    fetch(BASEURL + `${this.state.query}` + "/quote?token=" + TOKEN)
      .then(res => res.json())
      .then(json => {
        let toString = "[" + JSON.stringify(json) + "]";
        let toJSON = JSON.parse(toString);
        this.setState({
          results: toJSON,
          isLoaded: true
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length >= 1) {
          this.getInfo();
        } else if (!this.state.query) {
        }
      }
    );
  };

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    var { results, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <React.Fragment>
          <form className="col text-center">
            <input
              placeholder="Enter a stock symbol:"
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
          </form>
          <div className="col text-center">
            e.g., Apple = aapl ; Tesla = tsla{" "}
          </div>
          <main
            className="container"
            className={styles.container}
            className={styles.card}
            className={styles.root}
            className="col text-center"
          >
            <div>
              {results.map(item => (
                <Card>
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
                          Latest Price: ${item.latestPrice.toFixed(2)}
                          <br />
                          Change: ${item.change.toFixed(2)}
                          <br />% Change: &nbsp;
                          {(item.changePercent * 100).toFixed(2)}%
                          <br />
                          High: ${item.high.toFixed(2)} <br /> Low: $
                          {item.low.toFixed(2)}
                          <br />
                        </CardBody>
                      </div>
                    </div>

                    <div key="back">
                      <div key={item.symbol}>
                        <CardBody>
                          <CardHeader>{item.companyName}</CardHeader>
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
                  <Button onClick={this.handleClick} className={styles.button}>
                    More Info...
                  </Button>
                </Card>
              ))}
            </div>
          </main>
        </React.Fragment>
      );
    } else {
      if (!isLoaded) {
        return (
          <React.Fragment>
            <form className="col text-center">
              <input
                placeholder="Enter a stock symbol,"
                ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
            </form>
            <div className="col text-center">
              e.g., Apple = aapl ; Tesla = tsla{" "}
            </div>
          </React.Fragment>
        );
      }
    }
  }
}

export default Search;
