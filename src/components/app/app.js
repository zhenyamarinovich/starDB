import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

const App = () => {
  state = {
    selectedPerson: null,
  };

  //65 видео 6 минута

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
