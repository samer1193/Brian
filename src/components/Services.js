import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { currentCard } from "../actions/cardActions";
import Asylum from "./Asylum";
import DUI from "./DUI";
import CrimDefense from "./CrimDefense";
import Description from "./Description";
import Card from "./Card";
import Card2 from "./Card2";

import "../styles/services.css";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      card: {
        section: "main"
      }
    };

    this.onClick = this.onClick.bind(this);
    this.back = this.back.bind(this);
  }

  onClick(n) {
    console.log(n.target);
    if (n.target.id === "1") {
      console.log("1");
      this.payload = {
        card: {
          section: "1"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "2") {
      console.log("2");
      this.payload = {
        card: {
          section: "2"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "3") {
      console.log("3");
      this.payload = {
        card: {
          section: "3"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "4") {
      console.log("4");
      this.payload = {
        card: {
          section: "4"
        }
      };
      this.props.currentCard(this.payload.card);
    }
  }

  back() {
    if (this.props.card.subsubsubsection) {
      this.payload = {
        card: {
          section: this.props.card.section,
          subsection: this.props.card.subsection,
          subsubsection: this.props.card.subsubsection,
          subsubsubsection: ""
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (this.props.card.subsubsection) {
      this.payload = {
        card: {
          section: this.props.card.section,
          subsection: this.props.card.subsection,
          subsubsection: ""
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (this.props.card.subsection) {
      this.payload = {
        card: {
          section: this.props.card.section,
          subsection: ""
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (this.props.card.section) {
      if (this.props.card.section !== "main") {
        this.payload = {
          card: {
            section: "main"
          }
        };
        this.props.currentCard(this.payload.card);
      } else {
        console.log("end");
      }
    }
  }

  renderElement() {
    if (this.props.card.section == "main")
      return (
        <div className="servicesMain">
          <div className="servicesCard" id="1" onClick={this.onClick}>
            {/* <Card
                title="IMMIGRATION & ASYLUM LAW"
                text=""
                id="1"
                onClick={this.onClick}
              /> */}
            <Card2 title="IMMIGRATION & ASYLUM LAW" id="1" />
          </div>
          <div className="servicesCard" id="2" onClick={this.onClick}>
            {/* <Card title="DUI" text="" id="2" onClick={this.onClick} /> */}
            <Card2 title="DUI" id="2" />
          </div>
          <div className="servicesCard" id="3" onClick={this.onClick}>
            {/* <Card
                title="Criminal Defense & Expungement"
                text=""
                id="3"
                onClick={this.onClick}
              /> */}
            <Card2 title="Criminal Defense & Expungement" id="3" />
          </div>
          <div className="servicesCard" id="4" onClick={this.onClick}>
            {/* <Card title="Divorce" text="" id="4" onClick={this.onClick} /> */}
            <Card2 title="Divorce" id="4" />
          </div>
        </div>
      );
    else if (this.props.card.section === "1") return <Asylum />;
    else if (this.props.card.section === "2") return <DUI />;
    else if (this.props.card.section === "3") return <CrimDefense />;
    else if (this.props.card.section === "4") return <Description />;
  }

  renderButton() {
    if (this.props.card.section !== "main")
      return (
        <div className="backArrow" onClick={this.back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-8 mr-4 icon-arrow-thin-left-circle"
          >
            <circle cx="12" cy="12" r="10" class="primary" />
            <path
              class="secondary"
              d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
            />
          </svg>
        </div>
      );
    else
      return (
        <div className="backArrowHidden" onClick={this.back}>
          <p />
        </div>
      );
  }

  render() {
    return (
      <div>
        <h1>Services</h1>
        {/* <div className="servicesMain"> */}
        {/* {this.renderButton()} */}
        {this.renderElement()}
        {/* </div> */}
      </div>
    );
  }
}

Services.propTypes = {
  currentCard: PropTypes.func
};

const mapStatetoProps = state => ({
  auth: state.auth,
  card: state.card,
  errors: state.errors
});

export default connect(
  mapStatetoProps,
  { currentCard }
)(Services);
