import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';

//Composant Principal App rendu dans la balise root de l'index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
