import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { currentCard } from "../actions/cardActions";

import "../styles/family.css";

import ImmediateRelatives from "./ImmediateRelatives";
import Parents from "./Parents";
import Married from "./Married";
import BroAndSis from "./BroAndSis";
import Unmarried from "./Unmarried";
import SameSex from "./SameSex";
import Marriage from "./Marriage";
import SevenFiveOne from "./SevenFiveOne";
import Adoptions from "./Adoptions";
import A601 from "./A601";
import Card from "./Card";
import Card2 from "./Card2";

class Family extends Component {
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
          subsubsection: "1",
          subsubsubsection: "1"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "2") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "2"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "3") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "3"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "4") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "4"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "5") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "5"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "6") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "6"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "7") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "7"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "8") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "8"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "9") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "9"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "10") {
      this.payload = {
        card: {
          section: "1",
          subsection: "1",
          subsubsection: "1",
          subsubsubsection: "10"
        }
      };
      this.props.currentCard(this.payload.card);
    }
  }

  render() {
    if (this.props.card.subsubsubsection === "1") return <ImmediateRelatives />;
    if (this.props.card.subsubsubsection === "2") return <Parents />;
    if (this.props.card.subsubsubsection === "3") return <Married />;
    if (this.props.card.subsubsubsection === "4") return <BroAndSis />;
    if (this.props.card.subsubsubsection === "5") return <Unmarried />;
    if (this.props.card.subsubsubsection === "6") return <SameSex />;
    if (this.props.card.subsubsubsection === "7") return <Marriage />;
    if (this.props.card.subsubsubsection === "8") return <SevenFiveOne />;
    if (this.props.card.subsubsubsection === "9") return <Adoptions />;
    if (this.props.card.subsubsubsection === "10") return <A601 />;
    else if (this.props.card.subsubsection === "1") {
      return (
        <div className="servicesFamily">
          <div className="cardsFamily">
            <div className="cardFamily" id="1" onClick={this.onClick}>
              {/* <Card
                title="Immediate Relatives"
                text=""
                id="1"
                onClick={this.onClick}
              /> */}
              <Card2 title="Immediate Relatives" id="1" />
            </div>
            <div className="cardFamily" id="2" onClick={this.onClick}>
              {/* <Card title="Parents" text="" id="2" onClick={this.onClick} /> */}
              <Card2 title="Parents" id="2" />
            </div>
            <div className="cardFamily" id="3" onClick={this.onClick}>
              {/* <Card
                title="Married Sons and Daughters of US Citizens"
                text=""
                id="3"
                onClick={this.onClick}
              /> */}
              <Card2 title="Married Children of US Citizens" id="3" />
            </div>
            <div className="cardFamily" id="4" onClick={this.onClick}>
              {/* <Card
                title="Brother and Sisters of US Citizens"
                text=""
                id="4"
                onClick={this.onClick}
              /> */}
              <Card2 title="Brother and Sisters of US Citizens" id="4" />
            </div>
            <div className="cardFamily" id="5" onClick={this.onClick}>
              {/* <Card
                title="Unmarried Sons and Daughters of Green Card Holders"
                text=""
                id="5"
                onClick={this.onClick}
              /> */}
              <Card2 title="Unmarried Children of Green Card Holders" id="5" />
            </div>
            <div className="cardFamily" id="6" onClick={this.onClick}>
              {/* <Card
                title="Same Sex Couples"
                text=""
                id="6"
                onClick={this.onClick}
              /> */}
              <Card2 title="Same Sex Couples" id="6" />
            </div>
            <div className="cardFamily" id="7" onClick={this.onClick}>
              {/* <Card title="Marriage" text="" id="7" onClick={this.onClick} /> */}
              <Card2 title="Marriage" id="7" />
            </div>
            <div className="cardFamily" id="8" onClick={this.onClick}>
              {/* <Card title="751 Waiver" text="" id="8" onClick={this.onClick} /> */}
              <Card2 title="751 Waiver" id="8" />
            </div>
            <div className="cardFamily" id="9" onClick={this.onClick}>
              {/* <Card title="Adoptions" text="" id="9" onClick={this.onClick} /> */}
              <Card2 title="Adoptions" id="9" />
            </div>
            <div />
            <div className="cardFamily" id="10" onClick={this.onClick}>
              {/* <Card
                title="601A Provisional Waiver"
                text=""
                id="10"
                onClick={this.onClick}
              /> */}
              <Card2 title="601A Provisional Waiver" id="10" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.card.cardName === "family") {
      return <div>family</div>;
    }
  }
}

Family.propTypes = {
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
)(Family);
