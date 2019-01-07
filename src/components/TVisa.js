import React, { Component } from "react";

import "../styles/App.scss";

export default class TVisa extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">T Visa</h2>
          <br />
          <div className="descrLast">
            <p>
              In October 2000, Congress created the “T” nonimmigrant status by
              passing the Victims of Trafficking and Violence Protection Act
              (VTVPA). The legislation strengthens the ability of law
              enforcement agencies to investigate and prosecute human
              trafficking, and also to offer protection to victims.
            </p>
            <p>
              Human trafficking, also known as trafficking in persons, is a form
              of modern-day slavery in which traffickers lure individuals with
              false promises of employment and a better life. Traffickers often
              take advantage of poor, unemployed individuals who lack access to
              social services. The T Nonimmigrant Status (T visa) is a set aside
              for those who are or have been victims of human trafficking,
              protects victims of human trafficking and allows victims to remain
              in the United States to assist in an investigation or prosecution
              of human trafficking.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
