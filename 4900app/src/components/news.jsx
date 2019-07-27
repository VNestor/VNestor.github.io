/**
 News Component
 API provided by Stock News API
 This component retrieves data from Stock News and displays
 it in an esy to read format. 
 */

import React, { Component } from "react";

const TOKEN = `${process.env.REACT_APP_STOCKNEWS_KEY}`;
const BASEURL =
  "https://stocknewsapi.com/api/v1/category?section=general&items=50&token=";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      isNewsLoaded: false
    };
  }

  componentDidMount() {
    fetch(BASEURL + TOKEN)
      .then(results => results.json())
      .then(json => {
        this.setState({
          isNewsLoaded: true,
          articles: json
        });
      });
  }

  render() {
    var { isNewsLoaded, articles } = this.state;

    if (!isNewsLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <main>
            <div className="row" className="col text-center">
              <h1>News</h1>
              {articles.data.map(article => (
                <div className="leftcolumn">
                  <div className="box" key={article.title}>
                    <img src={article.image_url} />
                    <h2>{article.title}</h2>
                    <h5>{article.date}</h5>
                    <p>
                      {article.text}..<a href={article.news_url}>Read More</a>
                    </p>
                    Source: {article.source_name}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </React.Fragment>
      );
    }
  }
}

export default News;
