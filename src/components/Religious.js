import React, { Component } from "react";

import "../styles/App.scss";

export default class Religious extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Religious Workers</h2>
          <br />
          <div className="descrLast">
            <p>
              To be eligible for permanent residence in the religious worker
              category, you must
            </p>
            <ul>
              <li>
                Have been a member of a bona fide non-profit religious
                denomination for at least two years before the filing of a
                petition; and
              </li>
              <li>
                {" "}
                Have been working continuously for the past 2 years immediately
                prior to filing the immigrant petition:
              </li>
              <li>
                As a religious minister in a religious vocation either
                professional or non-professional capacity, or In a religious
                occupation either professional or nonprofessional capacity; and
              </li>
              <li>
                Seek to enter the United States solely to carry out such
                religious occupation of the employer’s denomination.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
