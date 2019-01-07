import React, { Component } from "react";

import "../styles/App.scss";

export default class ImmediateRelatives extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Immediate Relatives</h2>
          <br />
          <div className="descrLast">
            <p>
              Immediate relatives of US citizen are permitted to get green cards
              without any quota restrictions. Immediate relatives include
              spouses, parents and children of US citizens. Most immediate
              relatives are able to become permanent residents within 6 to 12
              months. If the marriage on which the immediate relative
              relationship is based is less than 2 years old, the spouse and any
              children will receive 2-year green cards a.k.a conditional green
              cards.
            </p>
            <p>
              An immediate relative child must be under the age of 21 and
              unmarried. If the citizen parent files a proper visa petition
              before the child’s 21st birthday, the child’s age is frozen at 20
              years even though the child will be 21 years of age or older when
              he actually receives his green card. There are special rules for
              step-children and adopted children. In order to sponsor an
              immediate relative parent, the sponsoring son or daughter must be
              at least 21 years old.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
