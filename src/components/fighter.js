import React, { Component } from "react";
import Score from "./score";

class Fighter extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">Fighter Name</div>
          <div className="col">
            <Score />
          </div>
        </div>
      </div>
    );
  }
}

export default Fighter;
