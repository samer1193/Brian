import React, { Component } from "react";

import "../styles/App.scss";

export default class Married extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Married Sons and Daughters of US Citizens</h2>
          <br />
          <div className="descrLast">
            <p>
              If you are a US citizen, you are eligible to sponsor your married
              children for green cards. Their spouses and children, if unmarried
              and under the age of 21, may also come with them. Under the Child
              Status Protection Act, if their children turn 21 during the
              petitioning process, they can subtract the time that your visa
              petition was pending from their ages at the time that their
              priority date becomes current. This process can be long, because
              US Immigration Law limit the number persons that are able to
              immigrate in this category
            </p>
          </div>
        </div>
      </div>
    );
  }
}
