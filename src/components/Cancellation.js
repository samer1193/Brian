import React, { Component } from "react";

import "../styles/App.scss";

export default class Cancellation extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">
            Cancellation of Removal for Illegal Aliens
          </h2>
          <br />
          <div className="descrLast">
            <p>
              If you have been placed in removal proceedings and you have lived
              in the United States for a long period of time, you may apply for
              Cancellation of Removal for non-LPRs before an Immigration Judge,
              if you satisfy the following conditions:
            </p>
            <ul>
              <li>
                You have been physically present in the U.S. for a continuous
                period of ten years prior to the start of removal proceedings.
                “Continuous” means that you were not out of the U.S. for more
                than 90 days at a time, or 180 days in the aggregate, during the
                ten-year period;
              </li>
              <li>
                You have been a person of good moral character for ten years;
              </li>
              <li>
                You are not inadmissible under §212(a)(2) or (3) (criminal and
                security grounds) or deportable under §237(a)(1)(G) (marriage
                fraud), (2) (criminal grounds), (3) (failure to register and
                falsification of documents) or (4) (security and related
                grounds); and
              </li>
              <li>
                {" "}
                Your removal would result in exceptional and extremely unusual
                hardship to your spouse, parent, or child, who is a citizen of
                the United States or a lawful permanent resident. Exceptional
                and Extremely Unusual Hardship
              </li>
            </ul>
            <p>
              To establish “exceptional and extremely unusual hardship,” you
              must show that your qualifying relative would suffer hardship
              “substantially beyond” that would ordinarily result from your
              removal from the United States. Hardship to the respondent is not
              considered. The Judge will consider your qualifying relative’s
              age, health, length of residence in the United States, as well as
              family and community ties in the U.S. and abroad. All hardship
              factors are considered in the aggregate. There are special or
              relaxed rules for cancellation of removal for non-LPRs apply to
              battered spouses and children.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
