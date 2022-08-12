import React from "react";
import { SecondComponentClass } from "./secondcomponent";
import { StateComponentClass, BackgroundChanger } from "./statecomponent";
import { Parent } from "./parent";

const testoProva = "testo dalla variabile";

export class MyComponentClass extends React.Component {
  myFunc() {
    alert("Stop it.  Stop Click.");
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>PROPS</h1>
        <span onClick={this.myFunc}>ciao</span>
        <p>Componente dentro un altro componente:</p>
        <SecondComponentClass
          passaggioValori="Ciao Mondo"
          variabile={testoProva}
        />
        <StateComponentClass />
        <BackgroundChanger />
        <Parent />
      </div>
    );
  }
}


