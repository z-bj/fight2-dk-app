import React, { Component } from "react";
import spectator from "./png/spectator.jpg";
class Spectator extends Component {
  render() {
    return (
      <div className="col">
        <img src={spectator} width={1120} alt="spectator" />
        <br />
      </div>
    );
  }
}

export default Spectator;
