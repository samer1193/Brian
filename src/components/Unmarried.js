import React, { Component } from "react";

import "../styles/App.scss";

export default class Unmarried extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">
            Unmarried Sons and Daughters of US Citizens
          </h2>
          <br />
          <div className="descrLast">
            <p>
              US citizen parents may petition for green cards for their
              unmarried sons and daughters. Also, their grandchildren may
              immigrate come together with their parent as long as they are
              under the age of 21 and unmarried. If your son or daughter is 21
              years of age or older when you petition them for green cards, the
              process can be long, because US immigration laws put a limit on
              the number of persons that can immigrate under the 1st preference
              category (unmarried adult sons/daughters of US citizens).
            </p>
            <p>
              After receiving the petition package, the USCIS will review your
              petition. First, USCIS will make decision to approve the petition.
              Then, much later when the priority date is reached, your unmarried
              son or daughter and their children will be interviewed. If the
              interview was successful, they will become legal permanent
              residents (LPR) of the US.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
