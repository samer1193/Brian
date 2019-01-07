import React, { Component } from "react";

import "../styles/App.scss";

export default class BroAndSis extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Brother and Sisters of US Citizens</h2>
          <br />
          <div className="descrLast">
            <p>
              If you are a US citizen and 21 or older, you can get green cards
              for your siblings, while Legal Permanent Residents are not
              eligible to sponsor siblings for green card. If your siblings are
              married, their spouses and children can immigrate at the same
              time. The children of your sibling have to be unmarried and under
              the age of 21 at the time you apply. If they turn 21 during the
              process, you can subtract the time that your visa petition was
              pending from their age at the time that their priority date
              becomes current. <br />
              Siblings through adoption must submit a copy of the adoption
              decrees to prove the adoption took place before either of you
              turned 16. Siblings through a step-parent must submit copies of
              documents that prove the legal termination of any prior marriage
              of the natural parents and step-parent. The process of sponsoring
              siblings for US green cards can be as lengthy as 12-13 years.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
