import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/Game.css';

class Game extends React.Component {
	state = {
		response: ''
	};

	componentDidMount() {
		this.callApi()
		.then(res => this.setState({ response: res.json }))
		.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/scrap');
		const body = await response.json();

		if (response.status !== 200)
			throw Error(body.title);
		return body;
	}
	render() {
		return (
			<div className="Game-container">
			<h1>let's go</h1>;
			</div>
		);
	}
}

export default Game;