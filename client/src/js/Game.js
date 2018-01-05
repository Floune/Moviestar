import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/Game.css';
import '../css/carousel.css';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import '../../node_modules/react-responsive-carousel/lib/components/Carousel.js'
import Carte from './Card.js'
import { Pagination } from 'react-materialize';
import { Carousel, onChange, onClickItem, onClickThumb } from 'react-responsive-carousel';

//Composant où vis le "jeu"
class Game extends React.Component {
	constructor() {
		super();
		this.state = {response: []}
	}	

	//On appelle l'api quand le composant est monté et on remplit le state response
	componentWillMount() {
		this.callApi()
		.then(res => this.setState({ response: res.films }))
		.catch(err => console.log(err));
	}

	//Appel à l'API
	callApi = async () => {
		const response = await fetch('/api/scrap');
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
	
	render() {
		let films = this.state.response;
		return (
				<div className="Game-card">
					{films.map(film =>
					<div>
						<img src={film.url} />
						<Carte film={film}/> 
					</div>)}
				</div>
				
			);
	}
}

export default Game;