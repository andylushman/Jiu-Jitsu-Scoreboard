import React, { Component } from "react";
import Fighter from "./components/fighter";
import Match from "./components/match";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Fighter />
        <Match />
      </div>
    );
  }
}

export default App;
