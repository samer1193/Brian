import React, { Component } from "react";

import "../styles/App.scss";

export default class Parents extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Parents</h2>
          <br />
          <div className="descrLast">
            <p>
              If you are a US citizen and 21 years old or older then you are
              eligible to get green cards for your parents. Parents of adult US
              citizens are considered “immediate relatives” under US Immigration
              Law, thus, it takes much shorter time to be processed, in
              comparison to other family based petitions. There is a time
              difference based on if your parents are lawfully in the US,
              unlawfully in the US, or abroad.
            </p>
            <p>
              If your parents have entered the US lawfully and are currently
              living in the US then the process takes about 6 months. Once they
              are successfully fingerprinted and have had medical examinations
              they will receive their work and travel permits within 90 days. If
              your parents are living abroad, the process will take about one
              year before they receive green cards.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
