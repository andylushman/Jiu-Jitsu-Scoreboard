import React, { Component } from "react";
import "../styles/timer.css";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingMinutes: 0,
      remainingSeconds: 0
    };
  }

  render() {
    return (
      <div className="container timer">
        <div className="row">
          <div className="col">
            {this.state.remainingMinutes}:{this.state.remainingSeconds}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
