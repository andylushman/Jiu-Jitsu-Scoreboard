import React, { Component } from "react";
import Score from "./score";
import "../styles/fighter.css";

class Fighter extends Component {
  render() {
    return (
      <div className="container-fluid fighter">
        <div className="row">
          <div className="col fighter-name">{this.props.fighterOneName}</div>
          <div className="col">
            <Score />
          </div>
        </div>
        <div className="row">
          <div className="col fighter-team">Fighter Team</div>
        </div>
      </div>
    );
  }
}

export default Fighter;
