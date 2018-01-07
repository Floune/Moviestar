import React from 'react';
import '../css/Game.css';
import Carte from './Card.js';
import Navbar from './Navbar.js';

//Composant où vis le "jeu"
class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			response: [],
			genres: [
				'comedy',
				'horror',
				'drama',
				'history',
				'anime',
				'fantasy',
				'children',
				'musical'
			]
		}
	}	

	//On appelle l'api quand le composant est monté et on remplit le state response
	componentWillMount() {
		this.callApi()
		.then(res => this.setState({ response: res.films }))
		.catch(err => console.log(err));
	}

	getCache = () => {
		let history = [];
		let obj_tmp = {};
		for (var key in localStorage) {
			obj_tmp.film = key;
			obj_tmp.rate = localStorage[key];
			history.push({film: obj_tmp.film, rate: obj_tmp.rate});
		}
		for (let x = 0; x < 6; x++)//Boucle pour enlever les dernières ntrées du tableau qui 
			history.pop();         //contiennent des choses qu'on ne veut pas
		return (history);
	}

	//Appel à l'API
	callApi = async () => {
		let genre = this.props.location.pathname.slice(6);
		if (genre == 'random')
		{
			let index = Math.floor(Math.random() * Math.floor(this.state.genres.length));
			genre = this.state.genres[index];
		}
		const response = await fetch('/api/scrap/' + genre);
		const film_obj = await response.json();

		if (response.status !== 200)
			throw Error(film_obj.films);

		return this.format_data_url(film_obj);
	}

	//Récupérer l'url propre 
	format_data_url(film_obj) {
		for (var i = film_obj.films.length - 1; i > 0; i--) {
			let url = film_obj.films[i].url;
			url = url.slice(url.search(' ')).trimLeft();
			let url_1 = url.slice(url.search(' ')).trimLeft();
			let url_2 = url_1.slice(url_1.search(' ')).trimLeft().slice(5, -5);
			film_obj.films[i].url = url_2;
		}
		return (this.format_data_title(film_obj));
	}

	//Récupérer le titre propre
	format_data_title(film_obj) {
		for (var i = film_obj.films.length - 1; i > 0; i--) {
			let title_start_index = film_obj.films[i].title.search('Seen It') + 7;
			let title = film_obj.films[i].title;
			let title_1 = title.slice(title_start_index);
			film_obj.films[i].title = title_1;
		}
		film_obj.films.shift();
		return (film_obj);
	}

	//fonction pour ne pas re affiher les films présents dans le local storage
	checkHistory(films) {
		let likes = this.getCache();
		for (let i = 0; i < likes.length; i++)
		{
			for (let j = 0; j < films.length; j++)
			{
				if (likes[i].film === films[j].title)
					films.splice(j, 1); //Pfouit
			}
		}
		return (films);
	}
	
	render() {
		let gender = this.props.location.pathname.slice(6);
		let profil = '/profil/' + gender;
		let films = this.state.response;
		films = this.checkHistory(films);
		return (
				<div className="Game-container">
					<Navbar profil={profil} />
					{films.map(film =>
					<div key={film.id} className="Game-card">
						<img src={film.url} alt={film.title}/>
						<Carte film={film}/>
					</div>)}
				</div>
				
			);
	}
}

export default Game;