import React, { Component } from "react";
import "../styles/footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="centerLogo">
          <div className="logoTag">
            <p id="copyright">
              &#169; 2019 TSEGTS Law Group P.C. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}
