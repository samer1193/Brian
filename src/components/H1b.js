import React, { Component } from "react";

import "../styles/App.scss";

export default class H1b extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">H1B Visa</h2>
          <br />
          <div className="descrLast">
            <p>
              H1B visas are for foreign-born professionals with employment offer
              in the U.S. To be eligible for H1B status, you must (1) have a
              minimum of a four-year university degree or equivalent; (2) be
              paid at the “prevailing wage”; and (3) the job must typically
              require a minimum four-year university degree or equivalent.{" "}
              <br />
              H1B visas are subject to a numerical cap of 65,000 per fiscal
              year. In addition, 20,000 persons who obtain advanced degrees from
              universities in the U.S. have their own H1B cap. For cap-subject
              employers, we start preparing their H-1B petitions as early as
              January, and submit them so that the USCIS will receive the
              petitions at the beginning of April. Employees with approved H1B
              petitions may start employment on October 1st.
              <br />
              However, there are special rules for graduates working on OPT
              (Optional Practical Training) which enable them to continue
              working for their employers during the spring and summer and
              automatically change their status to H-1B on October 1st. Certain
              H1B petitions are exempt from the numerical caps including
              employment “at universities, at affiliated or related
              organizations or at non-profit or governmental research
              institutions.” H1B visas are valid for 3 years. However, it can be
              extended for an additional 3 years.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
