import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { currentCard } from "../actions/cardActions";
import GreenCard from "./GreenCard";
import USCitizenship from "./USCitizenship";
import Visas from "./Visas";
import Deportation from "./Deportation";
import Card from "./Card";
import Card2 from "./Card2";

import "../styles/asylum.css";

class Asylum extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(n) {
    if (n.target.id === "1") {
      console.log("test1");
      this.payload = {
        card: {
          section: "1",
          subsection: "1"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "2") {
      this.payload = {
        card: {
          section: "1",
          subsection: "2"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "3") {
      this.payload = {
        card: {
          section: "1",
          subsection: "3"
        }
      };
      this.props.currentCard(this.payload.card);
    } else if (n.target.id === "4") {
      this.payload = {
        card: {
          section: "1",
          subsection: "4"
        }
      };
      this.props.currentCard(this.payload.card);
    }
  }

  renderElement() {
    if (this.props.card.subsection === "1") return <GreenCard />;
    if (this.props.card.subsection === "2") return <USCitizenship />;
    if (this.props.card.subsection === "3") return <Visas />;
    if (this.props.card.subsection === "4") return <Deportation />;
    else if (this.props.card.section === "1")
      return (
        <div className="servicesAsylum">
          <div id="1" onClick={this.onClick}>
            {/* <Card title="Green Card" text="" id="1" onClick={this.onClick} /> */}
            <Card2 title="Green Card" id="1" />
          </div>
          <div id="2" onClick={this.onClick}>
            {/* <Card
                title="US Citizenship"
                text=""
                id="2"
                onClick={this.onClick}
              /> */}
            <Card2 title="US Citizenship" id="2" />
          </div>
          <div id="3" onClick={this.onClick}>
            {/* <Card
                title="Non-Immigrant Visas or Temporary Visas"
                text=""
                id="3"
                onClick={this.onClick}
              /> */}
            <Card2 title="Non-Immigrant Visas or Temporary Visas" id="3" />
          </div>
          <div id="4" onClick={this.onClick}>
            {/* <Card
                title="Deportation Defense"
                text=""
                id="4"
                onClick={this.onClick}
              /> */}
            <Card2 title="Deportation Defense" id="4" />
          </div>
        </div>
      );
  }
  render() {
    return this.renderElement();
  }
}

Asylum.propTypes = {
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
)(Asylum);
