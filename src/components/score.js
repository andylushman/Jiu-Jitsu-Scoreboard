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

  increasePointsByFour = () => {
    this.setState({ points: this.state.points + 4 });
  };

  decreasePointsByFour = () => {
    this.setState({ points: this.state.points - 4 });
  };

  increasePointsByThree = () => {
    this.setState({ points: this.state.points + 3 });
  };

  decreasePointsByThree = () => {
    this.setState({ points: this.state.points - 3 });
  };

  increasePointsByTwo = () => {
    this.setState({ points: this.state.points + 2 });
  };

  decreasePointsByTwo = () => {
    this.setState({ points: this.state.points - 2 });
  };

  increaseAdvantages = () => {
    this.setState({ advantages: this.state.advantages + 1 });
  };

  decreaseAdvantages = () => {
    this.setState({ advantages: this.state.advantages - 1 });
  };

  increasePenalties = () => {
    this.setState({ penalties: this.state.penalties + 1 });
  };

  decreasePenalties = () => {
    this.setState({ penalties: this.state.penalties - 1 });
  };

  render() {
    return (
      <div className="container score">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-6">
                <div className="row points-btn">
                  <button
                    onClick={this.increasePointsByFour}
                    type="button"
                    className="btn-sm"
                  >
                    +
                  </button>
                  4
                  <button
                    onClick={this.decreasePointsByFour}
                    type="button"
                    className="btn-sm"
                  >
                    -
                  </button>
                </div>
                <div className="row points-btn">
                  <button
                    onClick={this.increasePointsByThree}
                    type="button"
                    className="btn-sm"
                  >
                    +
                  </button>
                  3
                  <button
                    onClick={this.decreasePointsByThree}
                    type="button"
                    className="btn-sm"
                  >
                    -
                  </button>
                </div>
                <div className="row points-btn">
                  <button
                    onClick={this.increasePointsByTwo}
                    type="button"
                    className="btn-sm"
                  >
                    +
                  </button>
                  2
                  <button
                    onClick={this.decreasePointsByTwo}
                    type="button"
                    className="btn-sm"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="col points score-button">{this.state.points}</div>
            </div>
          </div>

          <div className="col-3 advantages">
            <div className="col advantages-number score-button">
              {this.state.advantages}
            </div>
            <div className="row plus-minus-buttons ">
              <button onClick={this.increaseAdvantages}>+</button>
              <button onClick={this.decreaseAdvantages}>-</button>
            </div>
          </div>

          <div className="col-3 penalties">
            <div className="col penalties-number score-button">
              {this.state.penalties}
            </div>
            <div className="row plus-minus-buttons">
              <button onClick={this.increasePenalties}>+</button>
              <button onClick={this.decreasePenalties}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
