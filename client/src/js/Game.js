import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/Game.css';

//Composant où vis le "jeu"
class Game extends React.Component {
	state = {
		response: ''
	};

	//On appelle l'api quand le composant est monté et on remplit le state response
	componentDidMount() {
		this.callApi()
		.then(res => this.setState({ response: res}))
		.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/scrap');
		const film_obj = await response.json();

		if (response.status !== 200)
			throw Error(film_obj.films);

		return this.format_data(film_obj);
	}

	format_data(film_obj) {
		console.log(film_obj);
	// return(films)
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