import React, { Component, PropTypes } from 'react';
import '../css/Profil.css';
import { Card, CardTitle } from 'react-materialize';

class Profil extends Component {

	constructor(props) {
		super(props);
		this.state = {films: []}
	}

	componentWillMount() {
		let history = [];
		let obj_tmp = {};
		for (var key in localStorage) {
			obj_tmp.film = key;
			obj_tmp.url = localStorage[key];
			history.push({film: obj_tmp.film, rate: obj_tmp.rate});
		}
		for (let x = 0; x < 6; x++)
			history.pop();
		this.setState({films: history});
	}

	render() {
		let history = this.state.films;
		console.log(history);
		return (
			<div className="Profil-container">
			<h3>Historique</h3>
			{history.map(film =>
			
				<p>{film.rate} {film.film}</p>

				)}
			</div>
			);
	}
}

export default Profil;
