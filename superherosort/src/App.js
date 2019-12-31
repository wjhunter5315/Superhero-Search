import React, { Component } from 'react';
import './App.css';
// import Table from "./components/Table/table";
import Card from "./components/Card/card";
import Sort from "./components/Sort/sort";
import Filter from "./components/Filter/filter";
import heroes from "./heroes.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const heroes = this.state.heroes.filter(heroes => heroes.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ heroes });
  };

  render() {
    return (
      <div>
      {this.state.heroes.map(heroes => {
        <Card
          removeFriend={this.removeFriend}
          id={heroes.id}
          name={heroes.name}
          alias={heroes.alias}
          team={heroes.team}
        />
      })}
        <Sort/>
        <Filter/>
      </div>
    );
  };
}

export default App;
