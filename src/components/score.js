import React, { Component } from "react";
import "../styles/score.css";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      advantages: 0,
      penalties: 0
    };
  }

  IncrementPoints = () => {
    this.setState({ points: this.state.points + 1 });
  };

  DecreasePoints = () => {
    this.setState({ points: this.state.points - 1 });
  };

  IncrementAdvantages = () => {
    this.setState({ points: this.state.advantages + 1 });
  };

  DecreaseAdvantages = () => {
    this.setState({ points: this.state.advantages - 1 });
  };

  IncrementPenalties = () => {
    this.setState({ points: this.state.advantages + 1 });
  };

  DecreasePenalties = () => {
    this.setState({ points: this.state.advantages - 1 });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="row">
              <button type="button" className="btn-sm">
                +
              </button>
              4
              <button type="button" className="btn-sm">
                -
              </button>
            </div>
            <div className="row">
              <button type="button" className="btn-sm">
                +
              </button>
              3
              <button type="button" className="btn-sm">
                -
              </button>
            </div>
            <div className="row">
              <button type="button" className="btn-sm">
                +
              </button>
              2
              <button type="button" className="btn-sm">
                -
              </button>
            </div>
          </div>
          <div className="points col">{this.state.points}</div>
          <div className="advantages col">{this.state.advantages}</div>
          <div className="penalties col">{this.state.penalties}</div>
        </div>
      </div>
    );
  }
}

export default Score;
