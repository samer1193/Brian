import React, { Component } from "react";

import "../styles/App.scss";

export default class PERM extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">PERM processing</h2>
          <br />
          <div className="descrLast">
            <p>
              Vast majority of people who get green cards through employment
              based petitions need to undergo the PERM (labor certification)
              process. Here, employers submit PERM applications to the US
              Department of Labor showing that they have tried to hire U.S.
              citizen or green card holders for the job, but have not been
              successful. The first step in the labor certification process is
              to electronically request a prevailing wage determination (PWD)
              from the U.S. Department of Labor (DOL). The employer provides the
              DOL with job duties, requirements and location. <br />
              Then, the employer must conduct good faith recruitment effort to
              see if there are any qualified U.S. workers for the job. They are
              required to advertise the job in a newspaper of general
              circulation in the area of intended employment. The employer must
              also advertise the job with the state workforce agency and post a
              notice of the job opportunity at the work site. Finally, if no
              qualified U.S. workers apply for the job, the employer must
              prepare and submit a PERM application electronically to the DOL.
              It takes DOL several months to issue a decision the PERM
              application.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
