import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { currentCard } from "../actions/cardActions";

import "../styles/visas.css";

import E2 from "./E2";
import H1b from "./H1b";
import J1 from "./J1";
import Categories from "./Categories";
import Extension from "./Extension";
import Change from "./Change";
import F1 from "./F1";
import Card3 from "./Card3";

class Visas extends Component {
  constructor() {
    super();
    this.state = {
      card: {
        current: "main",
        previous: ""
      }
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(n) {
    if (n.target.id === "1") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3",
          subsubsection: "1"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "2") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3",
          subsubsection: "2"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "3") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3",
          subsubsection: "3"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "4") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3",
          subsubsection: "4"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "5") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3",
          subsubsection: "5"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "6") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3",
          subsubsection: "6"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "7") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3",
          subsubsection: "7"
        }
      };
      this.props.currentCard(this.payload.card);
    }
  }

  render() {
    if (this.props.card.subsubsection === "1") return <E2 />;
    else if (this.props.card.subsubsection === "2") return <H1b />;
    else if (this.props.card.subsubsection === "3") return <J1 />;
    else if (this.props.card.subsubsection === "4") return <Categories />;
    else if (this.props.card.subsubsection === "5") return <Extension />;
    else if (this.props.card.subsubsection === "6") return <Change />;
    else if (this.props.card.subsubsection === "7") return <F1 />;
    else if (this.props.card.subsection === "3") {
      return (
        <div className="servicesVisas">
          <div className="cardsVisas">
            <div className="cardVisas" id="1" onClick={this.onClick}>
              {/* <Card
                title="E2 or Investor Visa"
                text=""
                id="1"
                onClick={this.onClick}
              /> */}
              <Card3 title="E2 or Investor Visa" id="1" />
            </div>
            <div className="cardVisas" id="2" onClick={this.onClick}>
              {/* <Card title="H1B Visa" text="" id="2" onClick={this.onClick} /> */}
              <Card3 title="H1B Visa" id="2" />
            </div>
            <div className="cardVisas" id="3" onClick={this.onClick}>
              {/* <Card title="J1 Visa" text="" id="3" onClick={this.onClick} /> */}
              <Card3 title="J1 Visa" id="3" />
            </div>
            <div className="cardVisas" id="4" onClick={this.onClick}>
              {/* <Card
                title="Categories of Non-Immigrant Visas"
                text=""
                id="4"
                onClick={this.onClick}
              /> */}
              <Card3 title="Categories of Non-Immigrant Visas" id="4" />
            </div>
            <div className="cardVisas" id="5" onClick={this.onClick}>
              {/* <Card
                title="Extension of Stay"
                text=""
                id="5"
                onClick={this.onClick}
              /> */}
              <Card3 title="Extension of Stay" id="5" />
            </div>
            <div className="cardVisas" id="6" onClick={this.onClick}>
              {/* <Card
                title="Change of Status"
                text=""
                id="6"
                onClick={this.onClick}
              /> */}
              <Card3 title="Change of Status" id="6" />
            </div>
            <div />
            <div className="cardVisas" id="7" onClick={this.onClick}>
              {/* <Card
                title="F1 Reinstatement"
                text=""
                id="7"
                onClick={this.onClick}
              /> */}
              <Card3 title="F1 Reinstatement" id="7" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.card.cardName === "family") {
      return <div>family</div>;
    }
  }
}

Visas.propTypes = {
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
)(Visas);
