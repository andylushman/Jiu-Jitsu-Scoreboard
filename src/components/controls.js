import React, { Component } from "react";
import Fighter from "./fighter";
import Match from "./match";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighterOne: "",
      fighterTwo: "",
      matNumber: 0,
      fightNumber: 0
    };
  }

  render() {
    return (
      <div>
        <div>Controls</div>
        <Fighter />
        <Fighter />
        <Match />
      </div>
    );
  }
}

export default Controls;
