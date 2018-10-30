import React, { Component } from "react";
import "../styles/timer.css";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutesRemaining: 1,
      secondsRemaining: 13,
      totalTime: 0
    };

    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.increaseMin = this.increaseMin.bind(this);
    this.decreaseMin = this.decreaseMin.bind(this);
    this.increaseSec = this.increaseSec.bind(this);
    this.decreaseSec = this.decreaseSec.bind(this);
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

  async increaseSec() {
    await this.setState({
      secondsRemaining: this.state.secondsRemaining + 1
    });
    this.setState({
      totalTime: this.state.minutesRemaining + this.state.secondsRemaining
    });
  }

  async decreaseSec() {
    if (this.state.secondsRemaining <= 0) {
      return;
    }

    await this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
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
      <div className="container timer">
        <div className="row">
          <div className="col timer-min">
            <div className="timer-min-btn">
              <button onClick={this.increaseMin}>+</button>
              <button onClick={this.decreaseMin}>-</button>
              <div className="col">Min</div>
            </div>
            <div className="timer-clock">{this.state.minutesRemaining}:</div>
          </div>
          <div className="col timer-sec">
            <div className="timer-sec-btn">
              <button onClick={this.increaseSec}>+</button>
              <button onClick={this.decreaseSec}>-</button>
              <div className="col">Sec</div>
            </div>
            <div className="timer-clock">{this.state.secondsRemaining}</div>
          </div>
        </div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
