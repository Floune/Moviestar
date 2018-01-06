import React from 'react';
import { CardPanel, Button } from 'react-materialize';
import '../css/card.css';

//component avec les boutons pour voter
class Carte extends React.Component {
  
  save_like(titre) {
    console.log(titre.title + ' est liké');
    localStorage.setItem(titre.title, 'Liké');
  }

  save_dislike(titre) {
    localStorage.setItem(titre.title, 'Disliké');
  }

  render() {
    return (
       <CardPanel className="teal lighten-4 black-text">
            <Button large waves='light' className="Start-button" onClick={() => this.save_like(this.props.film)}>J'aime</Button>
            <Button large waves='light' className="Start-button" onClick={() => this.save_dislike(this.props.film)}>Je vomis</Button>
        </CardPanel>
      );
    }
  }

export default Carte;