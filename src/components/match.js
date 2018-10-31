import React, { Component } from "react";
import Timer from "./timer";
import "../styles/match.css";

class Match extends Component {
  render() {
    return (
      <div className="container-fluid match">
        <div className="row">
          <div className="col-sm-2 match-location-stats">
            <div className="row font-tan">Mat</div>
            <div className="row font-white">{this.props.matNumber}</div>
            <div className="row font-tan">Fight</div>
            <div className="row font-white">{this.props.fightNumber}</div>
          </div>
          <div className="col-sm-4 match-details">
            <div className="row font-white">
              {this.props.ageCatageory}/{this.props.maleFemale}/
              {this.props.belt}/{this.props.weight}
            </div>
            <div className="row match-title">{this.props.round}</div>
          </div>
          <div className="col-sm-6">
            <Timer repeatRound={this.props.repeatRound} />
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
