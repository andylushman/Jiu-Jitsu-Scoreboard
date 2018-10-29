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
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  setFighterOne(fighterOne) {
    this.setState({ fighterOne });
  }

  setFighterTwo(fighterTwo) {
    this.setState({ fighterTwo });
  }

  setFighterOneTeam(fighterOneTeamName) {
    this.setState({ fighterOneTeamName });
  }

  setFighterTwo(fighterTwo) {
    this.setState({ fighterTwo });
  }

  setFighterTwoTeam(fighterTwoTeamName) {
    this.setState({ fighterTwoTeamName });
  }

  setMatNumber(matNumber) {
    this.setState({ matNumber });
  }

  setFightNumber(fightNumber) {
    this.setState({ fightNumber });
  }

  setFightAge(ageCatageory) {
    this.setState({ ageCatageory });
  }

  setFightSex(maleFemale) {
    this.setState({ maleFemale });
  }

  setFightBelt(belt) {
    this.setState({ belt });
  }

  setFightWeight(weight) {
    this.setState({ weight });
  }

  setFightRound(round) {
    const roundUpperCase = round.toUpperCase();
    this.setState({ round: roundUpperCase });
  }

  render() {
    return (
      <div>
        <div>
          <button className="dropbtn" onClick={this.showMenu}>
            Input Fields
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
                      onChange={event => this.setFighterOne(event.target.value)}
                    />
                  </div>
                  <div>
                    Fighter One Team:
                    <input
                      onChange={event =>
                        this.setFighterOneTeam(event.target.value)
                      }
                    />
                  </div>
                  <div>
                    Fighter Two:
                    <input
                      onChange={event => this.setFighterTwo(event.target.value)}
                    />
                  </div>
                  <div>
                    Fighter Two Team:
                    <input
                      onChange={event =>
                        this.setFighterTwoTeam(event.target.value)
                      }
                    />
                  </div>
                  <div className="dropdown-title">--Match Info--</div>
                  <div>
                    Age Catagory:
                    <select
                      name="age catagory"
                      className="age-catagory"
                      onChange={event =>
                        this.setFightAge(
                          event.target.selectedOptions[0].innerHTML
                        )
                      }
                    >
                      <option value="adult">Adult</option>
                      <option value="master1">Master 1</option>
                      <option value="master2">Master 2</option>
                      <option value="master3">Master 3</option>
                      <option value="master4">Master 4</option>
                      <option value="master5">Master 5</option>
                      <option value="master6">Master 6</option>
                    </select>
                  </div>
                  <div>
                    Male/Female:
                    <select
                      name="male-female"
                      className="male-female"
                      onChange={event =>
                        this.setFightSex(
                          event.target.selectedOptions[0].innerHTML
                        )
                      }
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    Belt:
                    <select
                      name="belt"
                      className="belt"
                      onChange={event =>
                        this.setFightBelt(
                          event.target.selectedOptions[0].innerHTML
                        )
                      }
                    >
                      <option value="white">White</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="Brown">Brown</option>
                      <option value="Black">Black</option>
                    </select>
                  </div>
                  <div>
                    Weight:
                    <select
                      name="weight catagory"
                      className="weight-catagory"
                      onChange={event =>
                        this.setFightWeight(
                          event.target.selectedOptions[0].innerHTML
                        )
                      }
                    >
                      <option value="rooster">Rooster</option>
                      <option value="light-feather">Light Feather</option>
                      <option value="light">Light</option>
                      <option value="middle">Middle</option>
                      <option value="medium-heavy">Medium Heavy</option>
                      <option value="heavy">Heavy</option>
                      <option value="super-heavy">Super Heavy</option>
                    </select>
                  </div>
                  <div>
                    Round:
                    <input
                      onChange={event => this.setFightRound(event.target.value)}
                    />
                  </div>
                  <div>
                    Mat #:
                    <input
                      onChange={event => this.setMatNumber(event.target.value)}
                    />
                  </div>
                  <div>
                    Fight #:
                    <input
                      onChange={event =>
                        this.setFightNumber(event.target.value)
                      }
                    />
                  </div>
                </div>
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
        />
      </div>
    );
  }
}

export default Controls;
