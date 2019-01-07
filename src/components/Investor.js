import React, { Component } from "react";

import "../styles/App.scss";

export default class Investor extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Investor Based Green Card</h2>
          <br />
          <div className="descrLast">
            <p>
              EB5 investor green cards are granted to those who invest $1
              million in a new commercial enterprise and create 10 jobs for U.S.
              workers. However, if the enterprise is located in either a rural
              or a high-employment area, the amount of funds that needs to be
              invested is reduced to $500,000.
            </p>
            <p>
              Over 90% of all EB5 investors do not start their own businesses.
              Instead, they invest $500,000 in one of over 680 Regional Centers.
              10,000 immigrant visas per year are available to qualified
              individuals seeking EB5 investor green cards. A Regional Center is
              s an entity, organization or agency that has been approved as such
              by the Service; Focuses on a specific geographic area within the
              United States; and, Seeks to promote economic growth through
              increased export sales, improved regional productivity, creation
              of new jobs, and increased domestic capital investment.
            </p>
            <p>
              EB5 Investors must demonstrate that a “qualified investment” is
              being made in a new commercial enterprise located within an
              approved Regional Center; and, show, using reasonable
              methodologies, that 10 or more jobs are actually created either
              directly or indirectly by the new commercial enterprise through
              revenues generated from increased exports, improved regional
              productivity, job creation, or increased domestic capital
              investment resulting from the pilot program.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
