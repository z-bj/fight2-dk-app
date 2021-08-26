import React, { Component } from "react";
import miketyson from "./png/miketyson.png";
import countHits from "./countHits";
export class MikeTyson extends Component {
  render() {
    const { name, addOneHit, hocState, life } = this.props;
    const lifeValue =
      life > 0 ? (
        <td>{life} %</td>
      ) : (
        <td>
          <span className="badge badge-danger">K.O</span>
        </td>
      );

    const button =
      life > 0 ? (
        <button onClick={addOneHit} className="btn btn-success m-3">
          {name} hit
        </button>
      ) : (
        <button className="btn btn-danger m-3 disabled">K.O</button>
      );
    return (
      <div className="col">
        <img src={miketyson} alt="miketyson" />
        <br />

        {button}

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Hits</th>
              <th scope="col">Life</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(MikeTyson, 20);
