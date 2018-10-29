import React, { Component } from "react";
import Clock from "./clock";
import "../styles/match.css";

class Match extends Component {
  render() {
    return (
      <div className="container-fluid match">
        <div className="row">
          <div className="col-sm-2 match-location-stats">
            <div className="row font-tan">Mat</div>
            <div className="row font-white">3</div>
            <div className="row font-tan">Fight</div>
            <div className="row font-white">52</div>
          </div>
          <div className="col-sm-4 match-details">
            <div className="row font-white">Adult/Male/Black/Middle</div>
            <div className="row match-title">FINAL</div>
          </div>
          <div className="col-sm-6">
            <Clock />
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
