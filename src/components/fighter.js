import React, { Component } from "react";
import Score from "./score";
import "../styles/fighter.css";

class Fighter extends Component {
  render() {
    return (
      <div className="container-fluid fighter">
        <div className="row">
          <div className="col-xs-2 col-md-6 fighter-name">
            {this.props.fighterOneName || this.props.fighterTwoName}
          </div>
          <div className="col">
            <Score />
          </div>
        </div>
        <div className="row">
          <div className="col fighter-team">
            {this.props.fighterOneTeamName || this.props.fighterTwoTeamName}
          </div>
        </div>
      </div>
    );
  }
}

export default Fighter;
