import React from "react";
import { Child } from "./child";

export class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Frarthur",
      totalClicks: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will
    // result in a state change:
    this.setState({ totalClicks: total + 1 });
  }

  render() {
    return (
      <div>
        <h1>Stateless Components Inherit From Stateful Components</h1>
        <p>Valore modificato dal componente figlio: {this.state.totalClicks}</p>
        <Child name={this.state.name} onClick={this.handleClick} />
      </div>
    );
  }
}


