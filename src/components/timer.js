import React, { Component } from "react";
import "../styles/timer.css";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutesRemaining: 0,
      secondsRemaining: 0,
      totalTime: 0
    };

    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.increaseMin = this.increaseMin.bind(this);
    this.decreaseMin = this.decreaseMin.bind(this);
  }

  async increaseMin() {
    await this.setState({
      minutesRemaining: this.state.minutesRemaining + 1
    });
    this.setState({
      totalTime: this.state.minutesRemaining + this.state.secondsRemaining
    });
  }

  async decreaseMin() {
    if (this.state.minutesRemaining <= 0) {
      return;
    }

    await this.setState({
      minutesRemaining: this.state.minutesRemaining - 1
    });

    this.setState({
      totalTime: this.state.minutesRemaining + this.state.secondsRemaining
    });
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
    this.setState({
      totalTime: this.state.minutesRemaining + this.state.secondsRemaining
    });
  }

  tick() {
    this.setState({ totalTime: this.state.totalTime - 1 });
    if (this.state.totalTime <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.increaseMin}>+</button>
        <button onClick={this.decreaseMin}>-</button>
        <div className="timer">{this.state.totalTime}</div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
