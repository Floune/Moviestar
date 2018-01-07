import React from 'react';
import { CardPanel } from 'react-materialize';
import '../css/card.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

//component de notation à étoiles
class Carte extends React.Component {

handleRate(rating) {
  let rate = rating.rating;
  let film = rating.currentTarget.parentElement.parentElement.innerHTML;
  let index = film.search('alt=') + 5;
  film = film.slice(index).trimLeft();
  index = film.search('">');
  film = film.slice(0, index);
  localStorage.setItem(film, rate);
  localStorage.removeItem('class="react-rater'); //comportement bizarre du rater qui ajoute une entrée non voulue
}

  render() {
    return (
     <CardPanel className="Card-vote teal lighten-4 black-text">
        <Rater total={5} rating={0} onRate={this.handleRate.bind(this)}/>
      </CardPanel>
     );
  }
}

export default Carte;