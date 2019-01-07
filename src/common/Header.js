import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-gradient">
          <div className="header-intro">
            <h1 className="header-name">Bayarjargal Sereenen</h1>
            <div className="line" />
            <h3 className="header-tagline">Attorney for Immigration Law</h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
