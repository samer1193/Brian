import React, { Component } from "react";

import "../styles/App.scss";

export default class Professors extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Outstanding Professors and Researchers</h2>
          <br />
          <div className="descrLast">
            <p>
              Outstanding professors and researchers can get green cards in the
              United States without being required to go through the PERM(labor
              certification) process. <br />
              To be considered outstanding, a professor or researcher must be
              internationally recognized as outstanding in his or her academic
              area and must meet certain other requirements such as three years
              teaching or research experience in the field and arriving to take
              a tenure or tenure-track position or comparable research position
              at a university or other institution of higher education.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
