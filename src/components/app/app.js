import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";

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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    // {planet}
    // <PeoplePage />
    return (
      <div className="stardb-app">
        <Header />

        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
