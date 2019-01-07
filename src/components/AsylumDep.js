import React, { Component } from "react";

import "../styles/App.scss";

export default class AsylumDep extends Component {
  render() {
    return (
      <div className="sectionLast">
        <div className="cardLast">
          <h2 className="hdrLast">Asylum</h2>
          <br />
          <div className="descrLast">
            <p>
              You may avoid deportation through a successful asylum petition.
              You qualify for asylum in the US if you have been persecuted or
              have a “well-founded fear of persecution” in your country based on
              (1) political opinion, (2) religion, (3) race, (4) nationality, or
              (5) membership of a particular a social group. If you are outside
              the US, you may apply for refugee status based on the above
              criteria. Your fear of persecution must be either by the
              government of your country or by a group that the government is
              unable or unwilling to control.<br />
              If you are able to establish past persecution, a presumption
              arises that you have established a well-founded fear of
              persecution. The burden of proof shifts to the government to
              demonstrate that circumstances have changed and that you no longer
              have a well-founded fear of persecution or that you could avoid
              persecution by relocating in another part of your country and that
              it would be reasonable for you to do so.<br />
              If you are in lawful immigration status, you can submit an
              application for asylum directly with the appropriate USCIS Service
              Center. Should your application be denied, you will remain in
              lawful status. However, if you are not in lawful status, should
              your application not be approved by the USCIS, you will be placed
              in removal proceedings. If you are in removal proceedings before
              an immigration judge, in addition to applying for asylum, you may
              be eligible to apply for withholding of removal and for relief
              under the Convention Against Torture.<br />
              If the government can demonstrate that you have firmly resettled
              in a 3rd country, you are ineligible for asylum, withholding of
              removal and Convention Against Torture. Generally, you must apply
              for asylum within 1 year, after arriving in the US. However, there
              are several exceptions to this rule. Once your asylum application
              has been pending for over 150 days, you may apply for a work
              permit. If you are granted asylum, and your spouse and/or children
              are outside the US, then you may bring them to the US as asylees.
              One year after you are granted asylum, you may apply for a green
              card.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
