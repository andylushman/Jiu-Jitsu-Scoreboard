import React, { Component } from "react";
import "../styles/timer.css";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalMinutesOnTimer: 10,
      originalSecondsOnTimer: 0,
      originalTotalSecondsRemaining: 0,
      minutesOnTimer: 10,
      secondsOnTimer: 0,
      totalSecondsRemaining: 0,
      repeatRound: false,
      breakIntervalSeconds: 30,
      breakIntervalOn: false
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

  componentDidMount() {
    this.setState({
      totalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer,
      originalTotalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer
    });
  }

  async increaseMin() {
    await this.setState({
      minutesOnTimer: this.state.minutesOnTimer + 1,
      originalMinutesOnTimer: this.state.originalMinutesOnTimer + 1
    });
    this.setState({
      totalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer,
      originalTotalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer
    });
  }

  async decreaseMin() {
    if (this.state.minutesOnTimer <= 0) {
      return;
    }

    await this.setState({
      minutesOnTimer: this.state.minutesOnTimer - 1,
      originalMinutesOnTimer: this.state.originalMinutesOnTimer - 1
    });

    this.setState({
      totalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer,
      originalTotalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer
    });
  }

  async increaseSec() {
    await this.setState({
      secondsOnTimer: this.state.secondsOnTimer + 1,
      originalSecondsOnTimer: this.state.originalSecondsOnTimer + 1
    });
    if (this.state.secondsOnTimer > 59) {
      await this.setState({
        secondsOnTimer: 0
      });
    }

    this.setState({
      totalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer,
      originalTotalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer
    });
  }

  async decreaseSec() {
    if (this.state.secondsOnTimer <= 0) {
      await this.setState({
        secondsOnTimer: 60
      });
    }

    await this.setState({
      secondsOnTimer: this.state.secondsOnTimer - 1,
      originalSecondsOnTimer: this.state.originalSecondsOnTimer - 1
    });

    this.setState({
      totalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer,
      originalTotalSecondsRemaining:
        this.state.minutesOnTimer * 60 + this.state.secondsOnTimer
    });
  }

  startTimer() {
    clearInterval(this.interval);
    clearInterval(this.breakIntervalTimer);
    this.interval = setInterval(this.tick, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    clearInterval(this.breakIntervalTimer);
  }

  resetTimer() {
    clearInterval(this.interval);
    clearInterval(this.breakIntervalTimer);
    this.setState({
      breakIntervalOn: false,
      totalSecondsRemaining: this.state.originalTotalSecondsRemaining,
      minutesOnTimer: this.state.originalMinutesOnTimer,
      secondsOnTimer: this.state.originalSecondsOnTimer
    });
  }

  async tick() {
    await this.setState({
      totalSecondsRemaining: this.state.totalSecondsRemaining - 1,
      secondsOnTimer: this.state.secondsOnTimer - 1
    });

    if (this.state.totalSecondsRemaining <= 0) {
      clearInterval(this.interval);
      if (this.state.repeatRound) {
        this.breakInterval();
      }
    }

    if (this.state.secondsOnTimer < 0 && this.state.minutesOnTimer > 0) {
      await this.setState({
        minutesOnTimer: this.state.minutesOnTimer - 1,
        secondsOnTimer: 59
      });
    }
  }

  async breakInterval() {
    if (this.state.breakIntervalOn === false) {
      await this.setState({
        breakIntervalOn: true,
        totalSecondsRemaining: this.state.breakIntervalSeconds,
        secondsOnTimer: this.state.breakIntervalSeconds
      });
      this.breakIntervalTimer = setInterval(this.tick, 1000);
      return;
    }
    clearInterval(this.breakIntervalTimer);
    await this.setState({
      totalSecondsRemaining: this.state.originalTotalSecondsRemaining,
      minutesOnTimer: this.state.originalMinutesOnTimer,
      secondsOnTimer: this.state.originalSecondsOnTimer,
      breakIntervalOn: false
    });
    this.resetTimer();
    this.startTimer();
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
            <div className="timer-clock">{this.state.minutesOnTimer}:</div>
          </div>
          <div className="col timer-sec">
            <div className="timer-sec-btn">
              <button onClick={this.increaseSec}>+</button>
              <button onClick={this.decreaseSec}>-</button>
              <div className="col">Sec</div>
            </div>
            <div className="timer-clock">
              {this.state.secondsOnTimer < 10
                ? `0${this.state.secondsOnTimer}`
                : this.state.secondsOnTimer}
            </div>
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
