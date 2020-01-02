import React, { Component } from 'react';
import './App.css';
// import Table from "./components/Table";
import Card from "./components/Card";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import heroes from "./heroes.json";
import Wrapper from './components/Wrapper';

class App extends Component {
  // Setting this.state.heroes to the heroes json array
  state = {
    heroes
  };

  removeHero = id => {
    // Filter this.state.heroes for heroes with an id not equal to the id being removed
    const heroes = this.state.heroes.filter(heroes => heroes.id !== id);
    // Set this.state.heroes equal to the new heroes array
    this.setState({ heroes });
  };

  avengersFilter = team => {
    // filter through the Heroes to only show Avengers
        const heroes = this.state.heroes.filer(heroes => heroes.team === "Avengers");
        this.setState({ heroes });
    };
    
    xmenFilter = team => {
        // filter through the Heroes to only show X-Men
        const heroes = this.state.heroes.filer(heroes => heroes.team === "X-Men");
        this.setState({ heroes });
    };
    
    defendersFilter = team => {
        // filter through the Heroes to only show Defenders
        const heroes = this.state.heroes.filer(heroes => heroes.team === "Defenders");
        this.setState({ heroes });
    };

  render() {
    return (
      <Wrapper>
       
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
          <Sort/>
        <Filter/>
      </Wrapper>
    )
  };
}

export default App;
