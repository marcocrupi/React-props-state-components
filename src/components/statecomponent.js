import React from "react";

export class StateComponentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "decent",
    };
    this.stateChanger = this.stateChanger.bind(this);
  }

  stateChanger() {
    const newMood = this.state.mood == "good" ? "bad" : "good";
    this.setState({
      mood: newMood,
      newstate: "add by set state",
    });
  }

  render() {
    return (
      <div>
        <h1>STATE</h1>
        <p>I'm feeling {this.state.mood}!</p>
        <p>Prova new state: {this.state.newstate}</p>
        <button onClick={this.stateChanger}>Click Me</button>
      </div>
    );
  }
}

const green = "#39D1B4";
const yellow = "#FFD712";

export class BackgroundChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <p>Change my color</p>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
