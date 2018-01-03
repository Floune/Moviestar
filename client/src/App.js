import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from 'react-materialize';
import './App.css';

class App extends Component {
  state = {

  };

  componentDidMount() {
    this.callApi()
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/scrap');
    const body = await response.json();

    if (response.status !== 200)
      throw Error(body.title);
    console.log(body);
    return body;
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
          Moviestar
            </h1>
          <Button large waves='light'>
            Start
          </Button>
        </div>
      </div>
      );
  }
}

export default App;
