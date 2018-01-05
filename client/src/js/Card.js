import React from 'react';
import { Card, CardTitle } from 'react-materialize';

class Carte extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Card className="Game-affiche" horizontal header={<CardTitle image="https://img.reelgood.com/content/movie/3ee4a5d7-4684-4fd5-ba1c-936eb32a5cbb/poster-342.webp"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
        <p>Vote for me</p>
      </Card>
      );
    }
  }

export default Carte;