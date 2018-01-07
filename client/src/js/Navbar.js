import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

class Navbar extends Component {

	render() {
		let profil = this.props.profil;
		return (
			<div className="Nav-container">
				<Link to={'/'}>
				<Button waves='light' className="Start-button small">Retour</Button>
				</Link>
				<Link to={profil}>
				<Button waves='light' className="Start-button small">Profil</Button>
				</Link>
			</div>
			);
	}
}

export default Navbar;
