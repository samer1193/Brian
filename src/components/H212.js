import React, { Component } from "react";

import "../styles/App.scss";

export default class H212 extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">212H Waiver</h2>
          <br />
          <div className="descrLast">
            <p>
              If you are a permanent resident have a criminal conviction that
              makes you deportable, you may avoid deportation. You may be able
              to do so, if you qualify for a 212(h) waiver.<br />
              Even if you are deportable because you were convicted of one of
              the following crimes, you may still be eligible for a 212(h)
              waiver:
            </p>
            <ol>
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
            </ol>
            <h4>15-Year Waiver</h4>
            <p>
              You must demonstrate that the activities for which you are
              inadmissible occurred more than 15 years ago; that your admission
              would not be contrary to the national welfare, safety, or security
              of the US and 3) that you have been rehabilitated.
            </p>
            <h4>Extreme Hardship Waiver</h4>
            <p>
              If you inadmissible due to any qualifying criminal conduct, you
              may qualify for a waiver if: <br />
              (1) you can show that if you were denied admission, your US
              citizen or green card holder spouse, parent, son or daughter would
              suffer extreme hardship; and <br />
              (2) USCIS or the Immigration Judge exercises favorable discretion
              in your case.<br />
              Extreme Hardship Factors include whether your qualifying relatives
              have family ties to the US; the extent of the qualifying
              relatives’ family ties outside the US; conditions in your home
              country; financial impact of your departure from the US; and
              significant health conditions, particularly when tied to an
              unavailability of suitable medical care in your country.
            </p>
            <h4>Battered Spouse Waiver</h4>
            <p>
              If your spouse is a US citizen or green card holder and you were
              battered or subjected to extreme cruelty by your spouse, you may
              file a VAWA battered spouse petition. The same rules apply to a
              battered child. If you file such a battered spouse petition
              applying for a green card but are inadmissible due to qualifying
              criminal conduct, you can apply for a 212(h) waiver. Applying for
              a 212(h) waiver is an extremely complex process.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
