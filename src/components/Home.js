import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import Collapsible from "react-collapsible";

import Checkbox from "muicss/lib/react/checkbox";

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

  handleOrganic = (e) => {
    console.log("Organic Filter");
  };
  handleOrganic = (e) => {
    console.log("Organic Filter");
  };
  handleOrganic = (e) => {
    console.log("Organic Filter");
  };

  checkList = (e) => {
    console.log("yooo");
    console.log(e.value);
  };

  render() {
    let items = this.props.item;

    let dairyList = this.props.items.map((item) => {
      return item.category == "dairy" ? (
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
      ) : null;
    });

    let grainsList = this.props.items.map((item) => {
      return item.category == "grains" ? (
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
      ) : null;
    });

    let fruitVegatableList = this.props.items.map((item) => {
      return item.category == "vegetable" || item.category == "fruit" ? (
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
      ) : null;
    });

    let meatList = this.props.items.map((item) => {
      return item.category == "meat" ? (
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
      ) : null;
    });

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
            <input type="checkbox" onChange={this.handleChange} />
            <span>Organic</span>
          </label>
        </div>

        <button
          className=" btn-large next-button"
          name="action"
          onChange={this.handleChange}
        >
          Next
        </button>

        <Select
          placeholder="Select Option"
          options={data} // set list of the data
          onChange={this.handleChange} // assign onChange function
        />

        {/* 
        <form>
          <Checkbox
            className="check"
            name="inputA1"
            label="Option one"
            defaultChecked={true}
            onChange={this.handleChange}
          />
          <Checkbox name="inputA2" label="Option two" />
          <Checkbox
            name="inputA3"
            label="Option three is disabled"
            disabled={true}
          />
        </form> */}

        <h2 className="landing-title"></h2>
        <div className="box">{dairyList}</div>

        <h2 className="landing-title">Grains</h2>
        <div className="box">{grainsList}</div>
        <h2 className="landing-title">Fruits/Vegetables</h2>
        <div className="box">{fruitVegatableList}</div>
        <h2 className="landing-title">Meat</h2>
        <div className="box">{meatList}</div>
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
