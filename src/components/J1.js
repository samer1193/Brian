import React, { Component } from "react";

import "../styles/App.scss";

export default class J1 extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">J1 Visa</h2>
          <br />
          <div className="descrLast">
            <p>
              The J-1 Visa allows those who are approved to participate in an
              “exchange program” to temporarily remain in the U.S. for the
              duration of the program. J-1 program categories range from
              scientists or doctors to students, and can also provide for summer
              employment.
              <br />
              Usually, the J-1 visa holders are expected to return to his home
              country for two years after completion of his program, in order to
              provide opportunity for the home country government to utilize the
              experience and skills they had acquired. However, there is a
              waiver for the requirement. Spouses and children of J-1 visa
              holders may get J-2 status. Persons in J-2 status may apply for
              employment authorization documents.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
