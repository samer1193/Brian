import React, { Component } from "react";

import "../styles/App.scss";

export default class Extension extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Extension of Stay</h2>
          <br />
          <div className="descrLast">
            <p>
              The most common type of temporary visas to visit the U.S. are B-1
              and B-2 visas and the Visa Waiver Program. Persons may study in
              USA through F-1, M-1 and J-1 temporary visas. The most common
              types of temporary visas to work in the U.S. include E, H, L, O
              and P visas. We serve our clients who want to stay longer in USA
              for various types of reasons.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
