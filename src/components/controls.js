import React, { Component } from "react";
import Fighter from "./fighter";
import Match from "./match";
import "../styles/controls.css";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighterOne: "Fighter One",
      fighterOneTeamName: "Fighter One Team Name",
      fighterTwo: "Fighter Two",
      fighterTwoTeamName: "Fighter Two Team Name",
      matNumber: 0,
      fightNumber: 0,
      ageCatageory: "Adult",
      maleFemale: "Male",
      belt: "White",
      weight: "Rooster",
      round: "FINAL",
      showMenu: false,
      repeatRound: false,
      breakIntervalMinutes: 0,
      breakIntervalSeconds: 0
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleRoundTimerOn = this.toggleRoundTimerOn.bind(this);
    this.toggleRoundTimerOff = this.toggleRoundTimerOff.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (
      !this.dropdownMenu.contains(event.target) ||
      event.target.className === "controls-done-btn"
    ) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  toggleRoundTimerOn() {
    this.setState({
      repeatRound: true
    });
  }

  toggleRoundTimerOff() {
    this.setState({
      repeatRound: false
    });
  }

  render() {
    return (
      <div>
        <div>
          <button className="dropbtn" onClick={this.showMenu}>
            <span>
              <img
                className="controls-gear-icon"
                src={require("../images/gear-icon.png")}
              />
            </span>
            <span>Config</span>
          </button>
          {this.state.showMenu ? (
            <div
              className="menu dropdown-content"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <form>
                <div className="controls">
                  <div className="dropdown-title">--Fighter Info--</div>
                  <div>
                    Fighter One:
                    <input
                      value={this.state.fighterOne}
                      onChange={event =>
                        this.setState({
                          fighterOne: event.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    Fighter One Team:
                    <input
                      value={this.state.fighterOneTeamName}
                      onChange={event =>
                        this.setState({
                          fighterOneTeamName: event.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    Fighter Two:
                    <input
                      value={this.state.fighterTwo}
                      onChange={event =>
                        this.setState({
                          fighterTwo: event.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    Fighter Two Team:
                    <input
                      value={this.state.fighterTwoTeamName}
                      onChange={event =>
                        this.setState({
                          fighterTwoTeamName: event.target.value
                        })
                      }
                    />
                  </div>
                  <div className="dropdown-title">--Match Info--</div>
                  <div>
                    Age Catagory:
                    <select
                      value={this.state.ageCatageory}
                      name="age catagory"
                      className="age-catagory"
                      onChange={event =>
                        this.setState({ ageCatageory: event.target.value })
                      }
                    >
                      )}>
                      <option value="Adult">Adult</option>
                      <option value="Master 1">Master 1</option>
                      <option value="Master 2">Master 2</option>
                      <option value="Master 3">Master 3</option>
                      <option value="Master 4">Master 4</option>
                      <option value="Master 5">Master 5</option>
                      <option value="Master 6">Master 6</option>
                    </select>
                  </div>
                  <div>
                    Male/Female:
                    <select
                      value={this.state.maleFemale}
                      name="male-female"
                      className="male-female"
                      onChange={event =>
                        this.setState({ maleFemale: event.target.value })
                      }
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    Belt:
                    <select
                      value={this.state.belt}
                      name="belt"
                      className="belt"
                      onChange={event =>
                        this.setState({ belt: event.target.value })
                      }
                    >
                      <option value="White">White</option>
                      <option value="Blue">Blue</option>
                      <option value="Purple">Purple</option>
                      <option value="Brown">Brown</option>
                      <option value="Black">Black</option>
                    </select>
                  </div>
                  <div>
                    Weight:
                    <select
                      value={this.state.weight}
                      name="weight catagory"
                      className="weight-catagory"
                      onChange={event =>
                        this.setState({ weight: event.target.value })
                      }
                    >
                      <option value="Rooster">Rooster</option>
                      <option value="Light-Feather">Light Feather</option>
                      <option value="Light">Light</option>
                      <option value="Middle">Middle</option>
                      <option value="Medium-Heavy">Medium Heavy</option>
                      <option value="Heavy">Heavy</option>
                      <option value="Super-Heavy">Super Heavy</option>
                    </select>
                  </div>
                  <div>
                    Round:
                    <input
                      className="controls-round-title"
                      value={this.state.round}
                      onChange={event =>
                        this.setState({ round: event.target.value })
                      }
                    />
                  </div>
                  <div>
                    Mat #:
                    <input
                      value={this.state.matNumber}
                      onChange={event =>
                        this.setState({
                          matNumber: event.target.value
                        })
                      }
                    />
                  </div>
                  <div>
                    Fight #:
                    <input
                      value={this.state.fightNumber}
                      onChange={event =>
                        this.setState({ fightNumber: event.target.value })
                      }
                    />
                  </div>
                  <div className="dropdown-title">--Timer Info--</div>
                  <div>
                    Repeat Rounds:
                    <div className="repeat-round">
                      On
                      <input
                        className="repeat-round-radio-btn"
                        type="radio"
                        name="repeatRoundOn"
                        value={"On"}
                        checked={this.state.repeatRound}
                        onChange={this.toggleRoundTimerOn}
                      />
                      Off
                      <input
                        className="repeat-round-radio-btn"
                        type="radio"
                        name="repeatRoundOff"
                        value={"Off"}
                        checked={!this.state.repeatRound}
                        onChange={this.toggleRoundTimerOff}
                      />
                    </div>
                  </div>
                  <div>
                    Break Interval Time:
                    <div className="repeat-round-time">
                      Min
                      <input
                        value={this.state.breakIntervalMinutes}
                        min="0"
                        className="repeat-round-time-field"
                        type="number"
                        onChange={event =>
                          this.setState({
                            breakIntervalMinutes: event.target.value
                          })
                        }
                      />
                      Sec
                      <input
                        value={this.state.breakIntervalSeconds}
                        min="0"
                        max="59"
                        className="repeat-round-time-field"
                        type="number"
                        onChange={event =>
                          this.setState({
                            breakIntervalSeconds: event.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <button className="controls-done-btn" onClick={this.closeMenu}>
                  Done
                </button>
              </form>
            </div>
          ) : null}
        </div>

        <Fighter
          fighterOneName={this.state.fighterOne}
          fighterOneTeamName={this.state.fighterOneTeamName}
        />
        <Fighter
          fighterTwoName={this.state.fighterTwo}
          fighterOneTeamName={this.state.fighterTwoTeamName}
        />
        <Match
          matNumber={this.state.matNumber}
          fightNumber={this.state.fightNumber}
          ageCatageory={this.state.ageCatageory}
          maleFemale={this.state.maleFemale}
          belt={this.state.belt}
          weight={this.state.weight}
          round={this.state.round}
          repeatRound={this.state.repeatRound}
          breakIntervalMinutes={this.state.breakIntervalMinutes}
          breakIntervalSeconds={this.state.breakIntervalSeconds}
        />
      </div>
    );
  }
}

export default Controls;
