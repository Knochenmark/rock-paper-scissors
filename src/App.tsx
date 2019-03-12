import React, { Component } from "react";


import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";

interface AppState {
  gameOver: boolean;
}

class App extends Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      gameOver: false
    };
  }

  render() {
    return (
      <div>
        <a
          className="github-fork-ribbon"
          href="http://url.to-your.repo"
          data-ribbon="Fork me on GitHub"
          title="Fork me on GitHub"
        >
          Fork me on GitHub
        </a>
        <h1>Rock, Paper, Scissors</h1>
        <div className="scene">
          {this.state.gameOver ? <GameOver /> : <Game />}
        </div>
        <footer>
          Coded with 💓 by <a href="https://jodylecompte.com">Jody LeCompte</a>.
        </footer>
      </div>
    );
  }
}

export default App;
