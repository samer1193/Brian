import React, { Component } from "react";

import "../styles/App.scss";

export default class SameSex extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Same Sex Couples</h2>
          <br />
          <div className="descrLast">
            <p>
              Under a recent US Supreme Court case law, the federal court is
              blocked from denying same-sex couples any benefits that
              different-sex couples receive. This means that US citizens and
              legal permanent residents can sponsor their same-sex partners for
              green cards and that same-sex spouses can also be included as
              derivatives in their partners’ family and employment based
              applications. <br />
              As long as a same-sex couple is married in a state that permits
              gay marriage, their marriage is valid for immigration law purposes
              and the couple may live in whichever state they elect to live,
              because immigration is a federal law. Immigrants in same-sex
              relationship who live outside of the U.S., also benefit from this
              new law.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
