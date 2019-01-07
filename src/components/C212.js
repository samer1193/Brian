import React, { Component } from "react";

import "../styles/App.scss";

export default class C212 extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">212C Waiver</h2>
          <br />
          <div className="descrLast">
            <p>
              If you are a green card holder or legal permanent residence of the
              United States and have been placed in removal proceedings because
              of a criminal activity, you could seek a waiver of your
              convictions and avoid deportation. Your eligibility to apply for a
              waiver is depend on the type of crime you committed and the date
              on which you were convicted. Certain lawful permanent residents
              can apply for discretionary relief under section 212(c) of the
              Immigration and Nationality Act.
            </p>
            <p>
              The requirements to apply for and receive a 212c waiver include:
            </p>
            <ul>
              <li>You pled guilty to the crime prior to April 1, 1997</li>
              <li>
                You have been a lawful permanent resident for at least 5 years
              </li>
              <li>
                You are returning to a lawful, un-relinquished residence of at
                least 7 consecutive years
              </li>
              <li>
                You are not subject to deportation or removal on the grounds of
                terrorism or national security
              </li>
              <li>
                You are not unlawfully in the US due to a previous immigration
                offense
              </li>
              <li>
                You have not been convicted of a firearms offense or an
                aggravated felony offense for which you served over 5 years
              </li>
            </ul>
            <p>
              You are ineligible to receive a 212c waiver if you have departed
              and are currently outside the US, you have illegally returned
              after deportation or removal, or you are present in the US without
              having been admitted or paroled. It is important to note that the
              212c waiver is a discretionary. Therefore, even if you are
              eligible to apply for a 212c waiver, the Immigration Judge will
              decide on a case-by-case basis whether or not to grant you this
              relief.
              <br />
              The Judge will look closely at the balance of positive factors
              versus negative factors in your application. Positive factors
              include family ties in the US, long time residence in the US,
              hardship to you and your family if you were deported, property
              ownership, business ties, demonstrated value and service to the
              community, genuine rehabilitation and evidence that you are person
              of good character. Negative factors can include the nature,
              seriousness and recency of your criminal record and evidence that
              you are a person of bad moral character.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
