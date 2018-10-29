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

  onInputChange(fighterOne) {
    this.setState({ fighterOne });
  }

  render() {
    return (
      <div>
        <div className="controls">
          <div className="search-bar">
            <input
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
            />
          </div>
        </div>
        <Fighter fighterOneName={this.state.fighterOne} />
        <Fighter />
        <Match />
      </div>
    );
  }
}

export default Controls;
