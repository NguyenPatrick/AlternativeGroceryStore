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
  showCurrentFilter,
  fruitVegetablesFilter,
  meatFilter,
  grainsFilter,
  dairyFilter,
} from "./actions/cartActions";

const data = [
  {
    value: "Show All",
    label: "Show All",
  },
  {
    value: "Fruits/Vegetables",
    label: "Fruits/Vegetables",
  },
  {
    value: "Meat",
    label: "Meat",
  },
  {
    value: "Dairy",
    label: "Dairy",
  },
  {
    value: "Grains",
    label: "Grains",
  },
];

var filter;
var showAllList;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  previousPage = () => {
    this.props.history.push("/");
  };

  nextPage = () => {
    this.props.history.push("/cart/");
  };

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  handleChange = (e) => {
    console.log(e.value);

    if (e.value == "Grains") {
      this.props.grainsFilter();
    } else if (e.value == "Fruits/Vegetables") {
      this.props.fruitVegetablesFilter();
    } else if (e.value == "Meat") {
      this.props.meatFilter();
    } else if (e.value == "Dairy") {
      this.props.dairyFilter();
    } else {
      this.props.showCurrentFilter();
    }
  };

  render() {
    let render = "Meat";

    let showAllList = this.props.items.map((item) => {
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
        <h2 className="landing-title">Item Selection</h2>
        <h4 className="landing-desc">Feel free to filter by food category</h4>

        <Select
          placeholder="Select Option"
          options={data} // set list of the data
          onChange={this.handleChange} // assign onChange function
        />
        <br />

        <div className="button-row">
          <button
            className=" btn-large next-button"
            name="action"
            onClick={this.previousPage}
          >
            Previous
          </button>

          <button
            className=" btn-large next-button"
            name="action"
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>

        <div className="box">{showAllList}</div>
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
    showCurrentFilter: () => {
      dispatch(showCurrentFilter());
    },
    fruitVegetablesFilter: () => {
      dispatch(fruitVegetablesFilter());
    },
    meatFilter: () => {
      dispatch(meatFilter());
    },
    grainsFilter: () => {
      dispatch(grainsFilter());
    },
    dairyFilter: () => {
      dispatch(dairyFilter());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
