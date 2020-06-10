import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Footer from "./components/Footer";
import history from "./history";

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
