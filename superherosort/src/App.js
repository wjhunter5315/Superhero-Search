import React, { Component } from 'react';
import './App.css';
// import Table from "./components/Table";
import Card from "./components/Card";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import heroes from "./heroes.json";
import Wrapper from './components/Wrapper';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes
  };

  removeHero = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const heroes = this.state.heroes.filter(heroes => heroes.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ heroes });
  };

  render() {
    return (
      <Wrapper>
        <Sort/>
        <Filter/>
          <div className="list-group">
            {this.state.heroes.map(heroes => (
              <Card
                id={heroes.id}
                key={heroes.id}
                name={heroes.name}
                alias={heroes.alias}
                team={heroes.team}
              />
            ))}
          </div>
      </Wrapper>
    )
  };
}

export default App;
