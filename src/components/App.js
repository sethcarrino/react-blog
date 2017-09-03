import React, { Component } from 'react';
import logo from '../logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WELCOME TO LE' BLOG</h2>
        </div>
        <h3 className="App-intro">
          The "best" blog you have ever seen
        </h3>
      </div>
    );
  }
}

export default App;
