import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="stardb-app">
        <Header />
        {planet}
        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => (
                <span>
                  {item.name}
                  <button>@</button>
                </span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
