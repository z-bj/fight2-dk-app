import { Component } from "react";
import Banchamek from "./Banchamek";
import MikeTyson from "./MikeTyson";
import Title from "./Title";
import Spectator from "./Spectator";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banchamek: 100,
      miketyson: 100,
    };
  }

  reduceLife = (param, param2) => {
    if (param === "MikeTyson") {
      this.setState({
        banchamek: this.state.banchamek - param2,
      });
    } else {
      this.setState({
        miketyson: this.state.miketyson - param2,
      });
    }
  };

  render() {
    return (
      <div className="container text-center">
        <Title />
        <div className="row">
          <Banchamek
            name="Banchamek"
            life={this.state.banchamek}
            reduceHandler={this.reduceLife}
          />
          <MikeTyson
            name="Mike Tyson"
            life={this.state.miketyson}
            reduceHandler={this.reduceLife}
          />
          <Spectator />
        </div>
      </div>
    );
  }
}

export default App;
