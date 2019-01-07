import React, { Component } from "react";
import "../styles/scss/Descr.scss";

export default class Description extends Component {
  render() {
    return (
      <div class="description">
        <div class="post">
          <div class="post-left">
            <div class="post-left_title">Divorce</div>
            {/* <div class="post-left_title_sub">Dolor sit amet</div> */}
            <div class="post-left_border" />
          </div>
          <div class="post-right">
            <div class="post-right_body">
              <p>
                <span>D</span>UI is what is commonly called “drunk driving,” it
                refers to operating a motor vehicle while one’s blood alcohol
                content is above the legal limit set by statute, which
                supposedly is the level at which a person cannot drive safely.
                State statutes vary as to what that level is, but it ranges from
                .08 to .10. Driving on private property such as a parking lot is
                no defense, but sitting in a non-moving vehicle withoutthe
                ignition on probably is (sometimes resulting in a charge of
                “drunk in and about a vehicle”). This is a misdemeanor and is
                variously referred to as DUI, driving while intoxicated (DWI),
                drunk driving, or a “deuce”.
              </p>
            </div>
            {/* <div class="post-right_footer">
              <div class="post-right_footer_date">
                <p>
                  Sat 06 aug 2016 - <span>22h14</span>{" "}
                </p>
              </div>
              <div class="post-right_footer_pictos">
                <i class="fa fa-heart" aria-hidden="true" />
                <i class="fa fa-share-alt" aria-hidden="true" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
