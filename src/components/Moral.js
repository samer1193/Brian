import React, { Component } from "react";

import "../styles/App.scss";

export default class Moral extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Crime of Moral Turpitude</h2>
          <br />
          <div className="descrLast">
            <p>
              A criminal conviction can be a reason for deportation. All
              immigrants including those applying for a visa or green card,
              those who already have a visa or green card, and those with green
              cards applying for US citizenship can be can be deported under US
              immigration law. Criminal conduct is a common reason why
              immigrants are placed in removal proceedings, especially if they
              are convicted of a “crime of moral turpitude.”
            </p>
            <ul>
              <li>
                There is no specific definition of a crime of moral turpitude in
                US immigration law, but it generally refers to conduct that
                “shocks the public conscience as being inherently base, vile or
                depraved.” It “conflicts with the rules of morality and the
                person committing the crime has been acting recklessly and often
                with evil intent.” It is a concept that commonly includes crimes
                such as:
              </li>
              <li>Murder</li>
              <li>Voluntary or reckless manslaughter</li>
              <li>Rape</li>
              <li>
                You are not unlawfully in the US due to a previous immigration
                offense
              </li>
              <li>Kidnapping</li>
              <li>Assault with intent to rob or kill</li>
              <li>Fraud</li>
              <li>Larceny</li>
              <li>Intent to harm persons or things</li>
            </ul>
            <p>
              In order to be deported based on committing one crime of moral
              turpitude, the person must have been convicted within 5 years
              after entering the US. They also must have been sentenced to
              confinement for at least one year. A crime considered of moral
              turpitude in which a sentence of less than one year was imposed
              would not necessarily be considered grounds of deportation.
              <br />
              In these types of situations, it is up to the Immigration Judge on
              a case-by-case basis to determine if it is a crime of moral
              turpitude. The Judge will usually look at both the language of the
              law under which the person was convicted and the actual records
              and facts surrounding the conviction. It is up to them to decide
              if the crime was intentional and if the offender should be
              deported from the US.
              <br />
              There are some situations in which you may be able to apply for a
              waiver under section 212(h) of the Immigration and Nationality Act
              or for cancellation of removal.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
