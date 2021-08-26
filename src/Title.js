import vs from "./png/vs.png";
import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <nav className="navbar navbar-light ">
        <div style={{ marginLeft: 110 }}>
          <div className="navbar-brand">
            <h1
              style={{
                display: "inline-block",
                fontFamily: "'Libre Barcode 39 Text', cursive",
                fontSize: 50,
              }}
            >
              Banchamek
            </h1>
            <img
              src={vs}
              alt="vs"
              width="200"
              height="auto"
              style={{ display: "inline-block" }}
            />
            <h1
              style={{
                display: "inline-block",
                fontFamily: "Nosifer",
                fontSize: 50,
              }}
            >
              Mike Tyson
            </h1>
          </div>
        </div>
      </nav>
    );
  }
}

export default Title;
