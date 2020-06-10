import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Home.css";

import {
  addToCart,
  vegatarianFilter,
  glutenFreeFilter,
  showAllFilter,
  organicFilter,
} from "./actions/cartActions";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  handleChange = (e) => {
    console.log(e.value);

    if (e.value == "Vegetarian") {
      this.props.vegatarianFilter();
    } else if (e.value == "Gluten-Free") {
      this.props.glutenFreeFilter();
    } else if (e.value == "Organic") {
      this.props.organicFilter();
    } else {
      this.props.showAllFilter();
    }
  };

  nextPage = () => {
    console.log("Next Page");
    this.props.history.push("/main/");
  };

  handleOrganic = (e) => {
    console.log("Organic Filter");
  };
  handleOrganic = (e) => {
    console.log("Organic Filter");
  };
  handleOrganic = (e) => {
    console.log("Organic Filter");
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
          <label class="checkbox-item">
            <input type="checkbox" onChange={this.handleChange} />
            <span>Vegetarian</span>
          </label>
          <label class="checkbox-item">
            <input type="checkbox" onChange={this.handleChange} />
            <span>Gluten-Free</span>
          </label>
          <label class="checkbox-item">
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
