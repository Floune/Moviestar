import React, { Component } from 'react';
import '../css/App.css';
import Game from './Game.js';
import Start from './Start.js';
import Profil from './Profil.js';
// import NotFound from './NotFound.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Composant principal de l'appli où vivent les composants et le Router principal
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App-container">
          <Route exact={true} path="/" component={Start} />
          <Route exact={true} path="/game/:genre" component={Game} />
          <Route exact={true} path="/profil/:genre" component={Profil} />
        </div>
      </Router>
    );
  }
}
          // <Route path="*" component={NotFound} /> 

export default App;
