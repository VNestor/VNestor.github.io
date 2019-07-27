/**
 About Component

 */
import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="col text-center">
        <h1>About</h1>

        <h2>Hi, my name is Victor Nestor</h2>
        <body className="col text-center">
          I am a recent graduate from Brooklyn College, and this is my senior
          project for my 4900 class. <br />I chose to make a simple stock market
          application, but didn't know where to begin. After extensive research,{" "}
          <br />I chose to build a web application using
          <a href="https://reactjs.org/"> React</a>. I started this project
          knowing nothing about React and some Javascript, <br /> but I quickly
          learned the React library had everything I needed to achieve what I
          wanted to do. I wanted <br /> to create a simple web app that can be
          used to quickly retrieve financial data a person would be interested
          in.
          <br /> I have learned a lot, learning more about React, Javascript,
          and the resources and tools available.
          <br />
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
