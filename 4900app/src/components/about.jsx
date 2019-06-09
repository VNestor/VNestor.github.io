import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="col text-center">
        <h1>About</h1>

        <h2>Hi, my name is Victor Nestor</h2>
        <body className="col text-center">
          I am a student at Brooklyn College, and this is my senior project for
          my 4900 class. <br />I chose to make a simple stock market web
          application using <a href="https://reactjs.org/">React</a>. I began
          this <br /> project knowing nothing about React and some Javascript,
          but have learned a lot on my <br /> own and I hope this application
          shows that.
          <br />
          <h3>Tools and Resources</h3>
          <ul className="col text-left">
            <li>
              <a href="https://iexcloud.io/">IEX Cloud API</a> - Provided stock
              market data.
            </li>
            <li>
              <a href="https://stocknewsapi.com/">Stock News API</a> - Provided
              stock market news.
            </li>
            <li>
              <a href="https://www.getpostman.com/">Postman</a> - API
              development tool used to manage APIs and display data from API
              calls.
            </li>
            <li>
              <a href="https://getbootstrap.com/">Bootstrap</a> - Open source
              development toolkit for developing with HTML, CSS, and JS.
            </li>
            <li>
              <a href="https://github.com/">GitHub</a> - Code hosting platform.
              Used GitHub as a repository and also kept track of progress being
              made to application when updated.
            </li>
          </ul>
        </body>
      </div>
    );
  }
}

export default About;
