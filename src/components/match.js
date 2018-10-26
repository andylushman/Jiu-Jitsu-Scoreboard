import React, { Component } from "react";
import Clock from "./clock";

class Match extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">Match Details</div>
          <div className="col">
            <Clock />
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
