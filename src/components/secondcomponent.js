import React from "react";

export class SecondComponentClass extends React.Component {
  render() {
    return (
      <div>
        <h2>SECONDO COMPONENTE</h2>
        <p>
          Testo della props da stringa nella props: {this.props.passaggioValori}
        </p>
        <p>Testo della props da variabile: {this.props.variabile}</p>
      </div>
    );
  }
}

