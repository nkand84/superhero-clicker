import React, { Component } from 'react';
import cards from "../../cards.json";
import Card from '../Card';

class Game extends Component {
  state = {
    heros: cards,
    score: 0,
    randomNumber: 0,
    highScore:0
  }
// onclick score increments and high score also 
// when u click on an img twice score resets to zero and high score remains same
// on click array is shuffled eachtime randomly
 
  componentDidMount() {
    // let random = Math.floor(Math.random() * 6) + 1;
    // this.setState({
    //   randomNumber: random
    // });
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  cardClickedOn = (id) => {
    
     this.setState({
        score: this.state.score + 1,
        highScore: this.state.highScore + 1
     });
     this.state.heros = this.shuffleArray(cards);
  };

  render() {
    return (
      <div id="cotainer-fluid">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <span id="score-text">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>High Score: {this.state.highScore}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>Score: {this.state.score}</span>
              </span> 
              <a className="navbar-brand" href="#">
                <img alt="Brand" className="logo-img" src="/assets/images/marvel.jpg" />

              </a>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          {this.state.heros.map(hero => (
            <Card
              key={hero.id}
              id={hero.id}
              name={hero.name}
              image={hero.image}
              cardClickedOn={this.cardClickedOn} />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
