import React, { Component } from 'react';
import cards from "../../cards.json";
import Card from '../Card';
import '../Card/Card.css';

class Game extends Component {
  state = {
    heros: cards,
    score: 0,
    clickFlag: 0,
    highScore: 0
  }
  clickstate = {}
  
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
    if (!(id in this.clickstate)){
      this.clickstate[id] = 0
    }
    
    if (this.clickstate[id] === 0) {
      this.state.score = this.state.score + 1;
      if(this.state.score > this.state.highScore){
        this.state.highScore = this.state.highScore + 1;
      }
      this.setState({
       score: this.state.score,
       highScore: this.state.highScore
      });
      this.clickstate[id] = 1;
    }

    else if(this.clickstate[id] === 1){
      this.setState({
        score: 0,
        highScore: this.state.highScore
      });
      this.clickstate = {}
    }
    this.state.heros = this.shuffleArray(cards);
  };

  render() {
    return (
      <div className="cotainer-fluid buzz">
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
