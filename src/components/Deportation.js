import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { currentCard } from "../actions/cardActions";

import "../styles/deportation.css";

import AsylumDep from "./AsylumDep";
import Adjustment from "./Adjustment";
import Cancellation from "./Cancellation";
import Categories from "./Categories";
import C212 from "./C212";
import H212 from "./H212";
import Moral from "./Moral";
import Felony from "./Felony";
import I212 from "./I212";
import Card3 from "./Card3";

class Deportation extends Component {
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
          subsection: "4",
          subsubsection: "1"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "2") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "2"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "3") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "3"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "4") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "4"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "5") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "5"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "6") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "6"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "7") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "7"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "8") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "8"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "9") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4",
          subsubsection: "9"
        }
      };
      this.props.currentCard(this.payload.card);
    }
  }

  render() {
    if (this.props.card.subsubsection === "1") return <AsylumDep />;
    else if (this.props.card.subsubsection === "2") return <Adjustment />;
    else if (this.props.card.subsubsection === "3") return <Cancellation />;
    else if (this.props.card.subsubsection === "4") return <Categories />;
    else if (this.props.card.subsubsection === "5") return <C212 />;
    else if (this.props.card.subsubsection === "6") return <H212 />;
    else if (this.props.card.subsubsection === "7") return <Moral />;
    else if (this.props.card.subsubsection === "8") return <Felony />;
    else if (this.props.card.subsubsection === "9") return <I212 />;
    else if (this.props.card.subsection === "4") {
      return (
        <div className="servicesDeportation">
          <div className="cardsDeportation">
            <div className="cardDeportation" id="1" onClick={this.onClick}>
              {/* <Card title="Asylum" text="" id="1" onClick={this.onClick} /> */}

              <Card3 title="Asylum" id="1" />
            </div>
            <div className="cardDeportation" id="2" onClick={this.onClick}>
              {/* <Card
                title="Adjustment Of Status"
                text=""
                id="2"
                onClick={this.onClick}
              /> */}
              <Card3 title="Adjustment Of Status" id="2" />
            </div>
            <div className="cardDeportation" id="3" onClick={this.onClick}>
              {/* <Card
                title="Cancellation of Removal for Illegal Aliens"
                text=""
                id="3"
                onClick={this.onClick}
              /> */}
              <Card3
                title="Cancellation of Removal for Illegal Aliens"
                id="3"
              />
            </div>
            <div className="cardDeportation" id="4" onClick={this.onClick}>
              {/* <Card
                title="Cancellation of Removal for Green Card Holders"
                text=""
                id="4"
                onClick={this.onClick}
              /> */}
              <Card3
                title="Cancellation of Removal for Green Card Holders"
                id="4"
              />
            </div>
            <div className="cardDeportation" id="5" onClick={this.onClick}>
              {/* <Card title="212C Waiver" text="" id="5" onClick={this.onClick} /> */}
              <Card3 title="212C Waiver" id="5" />
            </div>
            <div className="cardDeportation" id="6" onClick={this.onClick}>
              {/* <Card title="212H Waiver" text="" id="6" onClick={this.onClick} /> */}
              <Card3 title="212H Waiver" id="6" />
            </div>
            <div className="cardDeportation" id="7" onClick={this.onClick}>
              {/* <Card
                title="Crime of Moral Turpitude"
                text=""
                id="7"
                onClick={this.onClick}
              /> */}
              <Card3 title="Crime of Moral Turpitude" id="7" />
            </div>
            <div className="cardDeportation" id="8" onClick={this.onClick}>
              {/* <Card
                title="Aggravated Felony"
                text=""
                id="8"
                onClick={this.onClick}
              /> */}
              <Card3 title="Aggravated Felony" id="8" />
            </div>
            <div className="cardDeportation" id="9" onClick={this.onClick}>
              {/* <Card
                title="212(I) Waiver"
                text=""
                id="9"
                onClick={this.onClick}
              /> */}
              <Card3 title="212(I) Waiver" id="9" />
            </div>
          </div>
        </div>
      );
    } else if (this.props.card.cardName === "family") {
      return <div>family</div>;
    }
  }
}

Deportation.propTypes = {
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
)(Deportation);
