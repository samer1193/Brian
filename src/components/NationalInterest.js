import React, { Component } from "react";

import "../styles/App.scss";

export default class NationalInterest extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">National Interest Waivers</h2>
          <br />
          <div className="descrLast">
            <p>
              Generally, if you qualify for “EB-2″ category (Workers Holding
              Advanced Degrees and Persons with Exceptional Ability in the Arts,
              Sciences and Business), you are subject to undergo the labor
              certification process. However, an exception might apply to you
              and you may get a national interest waiver, if your employment is
              in the “national interest.” The national waiver has very
              restrictive requirements and it is very difficult to get one.{" "}
              <br />
              When a person is distinguished in his or her field, the PERM or
              labor certification process may be contrary to the national
              interest since they do not result in an approval where a U.S.
              worker meets the minimum qualifications for the job. For example,
              if a distinguished scientist has been working on a project to
              treat a highly contagious disease, then it would be contrary to
              the national interest, to have the employer to hire a minimally
              qualified person for the job.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
