import React, { Component } from "react";

import "../styles/App.scss";

export default class Divorce extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Divorce</h2>
          <br />
          <div className="descrLast">
            <p>
              DUI is what is commonly called “drunk driving,” it refers to
              operating a motor vehicle while one’s blood alcohol content is
              above the legal limit set by statute, which supposedly is the
              level at which a person cannot drive safely. State statutes vary
              as to what that level is, but it ranges from .08 to .10. Driving
              on private property such as a parking lot is no defense, but
              sitting in a non-moving vehicle withoutthe ignition on probably is
              (sometimes resulting in a charge of “drunk in and about a
              vehicle”). This is a misdemeanor and is variously referred to as
              DUI, driving while intoxicated (DWI), drunk driving, or a “deuce”.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
