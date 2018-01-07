import React, { Component, PropTypes } from 'react';
import '../css/Profil.css';
import { Card, CardTitle, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

//Component de la page de profil
class Profil extends Component {

	constructor(props) {
		super(props);
		this.state = {films: []}
	}

	componentWillMount() {
		let history = this.getCache();
		this.setState({films: history});
	}

	//Récupère le localstorage et le renoie dans un tableau
	getCache() {
		let history = [];
		let obj_tmp = {};
		for (var key in localStorage) {
			obj_tmp.film = key;
			obj_tmp.rate = localStorage[key];
			history.push({film: obj_tmp.film, rate: obj_tmp.rate});
		}
		for (let x = 0; x < 6; x++)//Boucle pour enlever les dernières ntrées du tableau qui contiennent d'autres choses
			history.pop();
		return (history);
	}

	suppr(film) {
		localStorage.removeItem(film.film);
		let history = this.getCache();
		this.setState({films: history});
	}

	render() {
		let history = this.state.films;
		let msg;
		if (history === '')
			msg = <p>Historique vide</p>
		return (
			<div className="Profil-container">
			<h4>Historique</h4>
			{msg}
			{history.map(film =>
				<div key={film.film} className="Profil-card">
					<Button className="Profil-del-button waves-red waves-circle waves-light btn-floating secondary-content" onClick={() => this.suppr(film)}><i className="material-icons delete">delete</i></Button>
					<span className="Profil-infos">{film.film} : <Rater total={5} rating={Number(film.rate)} interactive={false}/></span> 
				</div>
				)}
			<Link to={'/game/'}>
				<Button waves='light' className="Start-button">Retour</Button>
			</Link>
			</div>
			);
	}
}

export default Profil;