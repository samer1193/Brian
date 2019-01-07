import React, { Component } from "react";

import "./styles/App.scss";
import "./styles/header.css";
import "./styles/blogEntries.css";
import "./styles/cases.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./styles/profile.css";
import "./styles/testimonials.css";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-tabs/style/react-tabs.css";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./common/Navbar";
import Main from "./common/Main";
import Services from "./components/Services";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/services" component={Services} />
            <Route exact path="/" component={Main} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
