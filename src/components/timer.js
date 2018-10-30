import React, { Component } from "react";
import "../styles/timer.css";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: this.props.secondsRemaining
    };

    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    clearInterval(this.interval);
    this.interval = setInterval(this.tick, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.setState({ secondsRemaining: this.props.secondsRemaining });
  }

  tick() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="timer">{this.state.secondsRemaining}</div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
