import React from 'react';
import { Button } from 'react-materialize';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/Start.css';

//Composant de la page d'accueil
class Start extends React.Component {

	constructor() {
		super();
		this.state = { genres:
		['/game/comedy',
		 '/game/horror',
		 '/game/drama',
		 '/game/family',
		 '/game/history',
		 '/game/random',
		 '/game/anime',
		 '/game/fantasy',
		 '/game/children',
		 '/game/crime',
		 '/game/cult',
		 '/game/thriller',
		 '/game/musical']
		}
	}

	clean_G(genre) {
		let clean_genre = genre.slice(6).toUpperCase();
		if (clean_genre === 'RANDOM')
			clean_genre += ' ?';
		return (clean_genre);
	}

	render() {
		let genres = this.state.genres;
		return (
			<div className="Start">
				<div className="Start-content">
					<h1 className="Start-title">Netflex</h1>
					{genres.map(genre => 
						<Link key={genre} to={genre}>
							<Button waves='light' className="Start-button">{this.clean_G(genre)}</Button>
						</Link>
					)}
				</div>
			</div>
			);
	}
}
					// <img src={logo} className="Start-logo" alt="logo" />

export default Start;