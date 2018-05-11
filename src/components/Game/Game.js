import React, { Component } from 'react';
import cards from "../../cards.json";
import Card from '../Card';

class Game extends Component {
  state = {
    heros: cards,
    score: 0,
    randomNumber: 0
  }

  componentDidMount() {
    let random = Math.floor(Math.random() * 6) + 1;
    this.setState({
      randomNumber: random
    });
  }


  cardClickedOn = (id) => {
    if (id === this.state.randomNumber) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  render() {
    return (
      <div id="cotainer-fluid">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <span id="score-text">
                <span>Random Number: {this.state.randomNumber}</span>
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
