import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../index.css";
import { Card, CardBody, Button, CardHeader } from "reactstrap";

class Losers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://cloud.iexapis.com/v1/stock/market/list/losers?token=pk_b24a0719ee7f4415b33737e51e8ef7f8"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
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
                        </CardBody>
                      </div>
                    </div>

                    <div key="back">
                      <div key={item.symbol}>
                        <CardBody>
                          <CardHeader>{item.companyName}</CardHeader>
                          High: ${item.high} <br /> Low: ${item.low}
                          <br />
                          Test: ${(item.high - item.low).toFixed(2)}
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
            </div>
          </main>
        </React.Fragment>
      );
    }
  }
}

export default Losers;
