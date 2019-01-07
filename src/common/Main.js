import React, { Component } from "react";

import { Element } from "react-scroll";
import Header from "./Header";
import PracticeAreas from "../components/PracticeAreas";
import Profile from "./Profile";
import Testimonials from "./Testimonials";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Element name="header">
          <Header />
        </Element>
        <Element name="practiceAreas">
          <PracticeAreas />
        </Element>
        <Element name="profile">
          <Profile />
        </Element>
        <Element name="testimonials">
          <Testimonials />
        </Element>
      </div>
    );
  }
}
