import React from 'react';
import { CardPanel, Button } from 'react-materialize';

class Carte extends React.Component {
  constructor() {
    super();
  }

  save_like(titre) {
    console.log(titre.title + ' est liké');
  }

  save_dislike(titre) {
    console.log(titre.title + ' est disliké');
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