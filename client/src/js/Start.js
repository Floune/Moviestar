import React from 'react';
import logo from '../img/logo.svg';
import { Button } from 'react-materialize';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/Start.css';

class Start extends React.Component {

	render() {
		return (
			<div className="Start">
				<div className="Start-content">
					<img src={logo} className="Start-logo" alt="logo" />
					<h1 className="Start-title">Moviestar</h1>
					<Link to={'/game/'}>
						<Button large waves='light' className="Start-button">Start</Button>
					</Link>
				</div>
			</div>
			);
	}
}

export default Start;