import React, { Component } from "react";

import "../styles/App.scss";

export default class Marriage extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Marriage</h2>
          <br />
          <div className="descrLast">
            <p>
              The spouses of U.S. citizens are considered an “immediate
              relative” under US immigration law. That means that there are no
              quota restrictions on the number of people who can obtain green
              cards through marriage to U.S. citizens. If the spouses entered
              the U.S. lawfully, they can file for adjustment of status without
              having to leave the U.S. Normally, the spouse receives an EAD(
              work permit) within 90 days. Also, they get an Advance Parole
              document to travel abroad, provided the immigration attorney
              applied one for them. If the foreign-born spouses entered the U.S.
              without inspection, they need to apply for a green card through
              marriage in their home country. However, they may be eligible to
              apply for a provisional waiver in the United States, depending on
              surrounding circumstances.
              <br />
              If the marriage is less than two years old when the green card is
              granted, the couple will have a two-year or conditional green
              card. The couple need to jointly petition to remove the condition,
              90 days before the expiration of the green card. If the couple
              divorces before the end of the two-year period, the foreign-born
              spouse my petition for a “good faith marriage waiver” of the joint
              petition requirement.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
