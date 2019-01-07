import React, { Component } from "react";

import "../styles/App.scss";

export default class Adjustment extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Adjustment of Status</h2>
          <br />
          <div className="descrLast">
            <p>
              A person who qualifies to be permanent resident may be able to
              apply to obtain a green card without leaving the U.S. This
              procedure is called adjustment of status. When a person applies
              for adjustment of status, we petition for a work permit
              (Employment Authorization Document a.k.a EAD) and, if he is
              eligible, for a travel permit (“advance parole”). Generally, an
              applicant for adjustment of status must have entered the U.S.
              legally and have never violated his immigration status. However,
              there are some exceptions to this general rule. Section 245(i) of
              the law provides that certain persons with old priority dates may
              pay a penalty fee and adjust their status despite entering the
              U.S. illegally or violating or overstaying their nonimmigrant
              status. Section 245(k) provides that if a person is applying for
              adjustment of status pursuant to an employment-based immigrant
              visa petition, he is eligible to do so as long as he has not been
              out of status for over 180 days since his most recent admission to
              the U.S.
              <br />
              Also, persons who are immediate relatives (parents, spouses and
              children of U.S. citizens) may adjust their status if they entered
              the U.S. lawfully even if they overstayed or worked without
              authorization without having to pay a penalty fee.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
