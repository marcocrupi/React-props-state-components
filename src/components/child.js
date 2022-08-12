import React from "react";

export class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Click Me!</button>
        <p>Hey, my name is {this.props.name}!</p>
      </div>
    );
  }
}
