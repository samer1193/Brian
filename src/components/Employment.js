import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { currentCard } from "../actions/cardActions";

import "../styles/employment.css";

import EB1 from "./EB1";
import Professors from "./Professors";
import NationalInterest from "./NationalInterest";
import Religious from "./Religious";
import PERM from "./PERM";
import Card3 from "./Card3";

class Employment extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(n) {
    if (n.target.id === "1") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "2",
          subsubsubsection: "1"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "2") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "2",
          subsubsubsection: "2"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "3") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "2",
          subsubsubsection: "3"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "4") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "2",
          subsubsubsection: "4"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "5") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "2",
          subsubsubsection: "5"
        }
      };
      this.props.currentCard(this.payload.card);
    }
  }

  render() {
    if (this.props.card.subsubsubsection === "1") return <EB1 />;
    if (this.props.card.subsubsubsection === "2") return <Professors />;
    if (this.props.card.subsubsubsection === "3") return <NationalInterest />;
    if (this.props.card.subsubsubsection === "4") return <Religious />;
    if (this.props.card.subsubsubsection === "5") return <PERM />;
    else if (this.props.card.subsubsection === "2") {
      return (
        <div className="servicesEmployment">
          <div className="cardsEmployment">
            <div className="cardEmployment" id="1" onClick={this.onClick}>
              {/* <Card
                title="Persons of Extraordinary Abilities"
                text=""
                id="1"
                onClick={this.onClick}
              /> */}
              <Card3 title="Persons of Extraordinary Abilities" id="1" />
            </div>
            <div className="cardEmployment" id="2" onClick={this.onClick}>
              {/* <Card
                title="Outstanding Professors and Researchers"
                text=""
                id="2"
                onClick={this.onClick}
              /> */}
              <Card3 title="Outstanding Professors and Researchers" id="2" />
            </div>
            <div className="cardEmployment" id="3" onClick={this.onClick}>
              {/* <Card
                title="National Interest Waivers"
                text=""
                id="3"
                onClick={this.onClick}
              /> */}
              <Card3 title="National Interest Waivers" id="3" />
            </div>
            <div className="cardEmployment" id="4" onClick={this.onClick}>
              {/* <Card
                title="Religious Workers"
                text=""
                id="4"
                onClick={this.onClick}
              /> */}
              <Card3 title="Religious Workers" id="4" />
            </div>
            <div className="cardEmployment" id="5" onClick={this.onClick}>
              {/* <Card
                title="PERM Processing"
                text=""
                id="5"
                onClick={this.onClick}
              /> */}
              <Card3 title="PERM Processing" id="5" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.card.cardName === "family") {
      return <div>family</div>;
    }
  }
}

Employment.propTypes = {
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
)(Employment);
