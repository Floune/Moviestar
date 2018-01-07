import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import '../css/NotFound.css';

class NotFound extends Component {

	render() {
		return (
			<div className="container">
				<h1>Whoops!</h1>
				<p>We couldn't find the page you<br />were looking for.</p>
				<Link to={'/'}>
				<Button waves='light' className="Start-button small">Reset</Button>
				</Link>
			</div>
			);
	}
}

export default NotFound;
