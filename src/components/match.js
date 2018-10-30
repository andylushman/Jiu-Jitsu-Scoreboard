import React, { Component } from "react";
import Timer from "./timer";
import "../styles/match.css";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutesRemaining: 1,
      secondsRemaining: 1,
      totalTime: 0
    };

    this.increaseMin = this.increaseMin.bind(this);
    this.decreaseMin = this.decreaseMin.bind(this);
  }

  componentWillMount() {
    this.setState({
      totalTime: this.state.minutesRemaining + this.state.secondsRemaining
    });
  }

  increaseMin() {
    this.setState({ minutesRemaining: this.state.minutesRemaining + 1 });
    console.log(this.state.minutesRemaining);
  }

  decreaseMin() {
    if (this.state.minutesRemaining <= 0) {
      return;
    }
    this.setState({ minutesRemaining: this.state.minutesRemaining - 1 });
    console.log(this.state.minutesRemaining);
  }

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
            <button onClick={this.increaseMin}>+</button>
            <button onClick={this.decreaseMin}>-</button>
            <Timer secondsRemaining={this.state.totalTime} />
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
