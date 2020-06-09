import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "./Home.css";

import {
  addToCart,
  vegatarianFilter,
  glutenFreeFilter,
  showAllFilter,
  organicFilter,
} from "./actions/cartActions";

const data = [
  {
    value: "Show All",
    label: "Show All",
  },
  {
    value: "Vegetarian",
    label: "Vegetarian",
  },
  {
    value: "Gluten-Free",
    label: "Gluten-Free",
  },
  {
    value: "Organic",
    label: "Organic",
  },
];

const options = ["Vegetarian", "Gluten-Free", "Organic"];

class Home extends Component {
  state = { checked: false };
  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });

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

  checkList = (e) => {
    console.log("yooo");
    console.log(e.value);
  };

  render() {
    let items = this.props.item;

    let dairyList = this.props.items.map((item) => {
      return item.title == "Spinach" ? (
        <div className="card" key={item.id}>
          {item.title === "Spinach"}
          <div className="card-image">
            <img src={item.img} alt={item.title} />
          </div>
          <span className="card-title">{item.title}</span>
          <span
            to="/"
            className="btn halfway-fab waves-effect waves-light lightblue card-button add-button"
            onClick={() => {
              this.handleClick(item.id);
            }}
          >
            <i className="material-icons">add</i>
          </span>
          <div className="card-content">
            <p>{item.desc}</p>
            <p className="card-price">
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      ) : null;
    });

    let grainList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
          </div>
          <span className="card-title">{item.title}</span>
          <span
            to="/"
            className="btn halfway-fab waves-effect waves-light lightblue card-button add-button"
            onClick={() => {
              this.handleClick(item.id);
            }}
          >
            <i className="material-icons">add</i>
          </span>
          <div className="card-content">
            <p>{item.desc}</p>
            <p className="card-price">
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container landing">
        <h2 className="landing-title">Welcome to Patrick's Grocery Store!</h2>
        <h4 className="landing-desc">
          Tell us abit about yourself so we can optimize your experience!
        </h4>
        <br />
        <h5>Do you have any dietary preferences?</h5>

        <Select
          placeholder="Select Option"
          options={data} // set list of the data
          onChange={this.handleChange} // assign onChange function
        />

        <h2 className="landing-title">Dairy Products</h2>
        <div className="box">{dairyList}</div>
        <h2 className="landing-title">Dairy Products</h2>
        <div className="box">{grainList}</div>
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
