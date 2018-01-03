import React, { Component } from 'react';
import '../css/App.css';
import Game from './Game.js';
import Start from './Start.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App-container">
          <Route exact={true} path="/" component={Start} />
          <Route exact={true} path="/game/" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
