import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { currentCard } from "../actions/cardActions";

import "../styles/greencard.css";

import Family from "./Family";
import Employment from "./Employment";
import Investor from "./Investor";
import AsylumBased from "./AsylumBased";
import UVisa from "./UVisa";
import TVisa from "./TVisa";
import Card from "./Card";
import Card3 from "./Card3";

class GreenCard extends Component {
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
          subsubsection: "1"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "2") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "2"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "3") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "3"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "4") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "4"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "5") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "5"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "6") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "6"
        }
      };
      this.props.currentCard(this.payload.card);
    }
  }

  render() {
    if (this.props.card.subsubsection === "1") return <Family />;
    if (this.props.card.subsubsection === "2") return <Employment />;
    if (this.props.card.subsubsection === "3") return <Investor />;
    if (this.props.card.subsubsection === "4") return <AsylumBased />;
    if (this.props.card.subsubsection === "5") return <UVisa />;
    if (this.props.card.subsubsection === "6") return <TVisa />;
    else if (this.props.card.subsection === "1") {
      return (
        <div className="servicesGC">
          <div className="cardsGC">
            <div className="cardGC" id="1" onClick={this.onClick}>
              {/* <Card
                title="Family Based"
                text=""
                id="1"
                onClick={this.onClick}
              /> */}
              <Card3 title="Family Based" id="1" />
            </div>
            <div className="cardGC" id="2" onClick={this.onClick}>
              {/* <Card
                title="Employment Based"
                text=""
                id="2"
                onClick={this.onClick}
              /> */}
              <Card3 title="Employment Based" id="2" />
            </div>
            <div className="cardGC" id="3" onClick={this.onClick}>
              {/* <Card title="Investor" text="" id="3" onClick={this.onClick} /> */}
              <Card3 title="Investor" id="3" />
            </div>
            <div className="cardGC" id="4" onClick={this.onClick}>
              {/* <Card title="Asylum" text="" id="4" onClick={this.onClick} /> */}
              <Card3 title="Asylum" id="4" />
            </div>
            <div className="cardGC" id="5" onClick={this.onClick}>
              {/* <Card title="U Visa" text="" id="5" onClick={this.onClick} /> */}
              <Card3 title="U Visa" id="5" />
            </div>
            <div className="cardGC" id="6" onClick={this.onClick}>
              {/* <Card title="T Visa" text="" id="6" onClick={this.onClick} /> */}
              <Card3 title="T Visa" id="6" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.card.cardName === "family") {
      return <div>family</div>;
    }
  }
}

GreenCard.propTypes = {
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
)(GreenCard);
