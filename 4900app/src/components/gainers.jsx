/** 
 Gainers component 
 *should really be called card component*
 API provided by IEXCloud
 This component retrieves data from API and organizes data into a card format.
 Card has a front and back and each card has a button that flips all cards. 
 Known Issues:
 App crashes when toFixed() of null
 App needs to refresh twice to update data. 
 To do:
 Make app update once a market is clicked on without having to refresh
 */

import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../index.css";
import { Card, CardBody, Button, CardHeader } from "reactstrap";

const BASEURL = "https://cloud.iexapis.com/v1/stock/market/list/";
const TOKEN = `${process.env.REACT_APP_IEX_KEY}`;

class Gainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isFlipped: false,
      api: this.props.api,
      updated: true
    };
    this.refreshAPI = this.refreshAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(BASEURL + this.props.api + "?token=" + TOKEN)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  refreshAPI() {
    this.setState(state => ({ updated: !state.updated }));
  }

  componentWillReceiveProps(props) {
    const { api } = this.props;
    if (props.api !== api) {
      this.refreshAPI();
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
                          Latest Price:{" "}
                          {item.latestPrice == null
                            ? "N/A"
                            : "$" + item.latestPrice.toFixed(2)}
                          <br />
                          Change:{" "}
                          {item.change == null
                            ? "N/A"
                            : "$" + item.change.toFixed(2)}
                          <br />% Change:{" "}
                          {item.changePercent == null
                            ? "N/A"
                            : (item.changePercent * 100).toFixed(2)}
                          %
                          <br />
                          High:{" "}
                          {item.high == null
                            ? "N/A"
                            : "$" + item.high.toFixed(2)}{" "}
                          <br /> Low: ${item.low.toFixed(2)}
                          <br />
                        </CardBody>
                      </div>
                    </div>

                    <div key="back">
                      <div key={item.symbol}>
                        <CardBody>
                          <CardHeader>{item.companyName}</CardHeader>
                          Volume:{" "}
                          {item.latestVolume == null
                            ? "N/A"
                            : new Intl.NumberFormat().format(item.latestVolume)}
                          <br />
                          Avg Vol:{" "}
                          {item.avgTotalVolume == null
                            ? "N/A"
                            : new Intl.NumberFormat().format(
                                item.avgTotalVolume
                              )}
                          <br />
                          Market Cap:{" "}
                          {item.marketCap == null
                            ? "N/A"
                            : new Intl.NumberFormat().format(item.marketCap)}
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
    }
  }
}

export default Gainers;
