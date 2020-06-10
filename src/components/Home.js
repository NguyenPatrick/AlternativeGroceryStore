import React, { Component } from "react";
import { connect } from "react-redux";

import "./Home.css";

import {
  addToCart,
  vegatarianFilter,
  glutenFreeFilter,
  showAllFilter,
  organicFilter,
} from "./actions/cartActions";

var glutenFreeCheck = false;
var vegatarianCheck = false;
var organicCheck = false;

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.showAllFilter();
    glutenFreeCheck = false;
    vegatarianCheck = false;
    organicCheck = false;
  }

  nextPage = () => {
    this.props.showAllFilter();

    if (glutenFreeCheck == true) {
      this.props.glutenFreeFilter();
    }
    if (vegatarianCheck == true) {
      this.props.vegatarianFilter();
    }
    if (organicCheck == true) {
      this.props.organicFilter();
    }
    this.props.history.push("/main/");
  };

  handleGlutenFree = (e) => {
    glutenFreeCheck = !glutenFreeCheck;
  };
  handleVegetarian = (e) => {
    vegatarianCheck = !vegatarianCheck;
  };
  handleOrganic = (e) => {
    organicCheck = !organicCheck;
  };

  render() {
    return (
      <div className="container landing">
        <h2 className="landing-title">Welcome to Patrick's Grocery Store!</h2>
        <h4 className="landing-desc">
          Tell us abit about yourself so we can optimize your experience!
        </h4>
        <br />
        <h5>Do you have any dietary preferences?</h5>

        <div className="checkbox-list">
          <label className="checkbox-item">
            <input type="checkbox" onChange={this.handleVegetarian} />
            <span>Vegetarian</span>
          </label>
          <label className="checkbox-item">
            <input type="checkbox" onChange={this.handleGlutenFree} />
            <span>Gluten-Free</span>
          </label>
          <label className="checkbox-item">
            <input type="checkbox" onChange={this.handleOrganic} />
            <span>Organic</span>
          </label>
        </div>

        <button
          className=" btn-large next-button"
          name="action"
          onClick={this.nextPage}
        >
          Next
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    showAllFilter: () => {
      dispatch(showAllFilter());
    },
    vegatarianFilter: () => {
      dispatch(vegatarianFilter());
    },
    glutenFreeFilter: () => {
      dispatch(glutenFreeFilter());
    },
    organicFilter: () => {
      dispatch(organicFilter());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
