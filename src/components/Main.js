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

const foodList = [];

class Main extends Component {
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

    if (e.value == "Show All") {
      this.props.vegatarianFilter();
    } else if (e.value == "Organic") {
      this.props.organicFilter();
    } else if (e.value == "Organic") {
      this.props.organicFilter();
    } else {
      this.props.showAllFilter();
    }
  };

  render() {
    let items = this.props.item;

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

    // let dairyList = this.props.items.map((item) => {
    //   return item.category == "dairy" ? (
    //     <div className="card" key={item.id}>
    //       <div className="card-image">
    //         <img src={item.img} alt={item.title} />
    //       </div>
    //       <span className="card-title">{item.title}</span>
    //       <span
    //         to="/"
    //         className="btn halfway-fab waves-effect waves-light lightblue card-button add-button"
    //         onClick={() => {
    //           this.handleClick(item.id);
    //         }}
    //       >
    //         <i className="material-icons">add</i>
    //       </span>
    //       <div className="card-content">
    //         <p>{item.desc}</p>
    //         <p className="card-price">
    //           <b>Price: {item.price}$</b>
    //         </p>
    //       </div>
    //     </div>
    //   ) : null;
    // });

    // let grainsList = this.props.items.map((item) => {
    //   return item.category == "grains" ? (
    //     <div className="card" key={item.id}>
    //       <div className="card-image">
    //         <img src={item.img} alt={item.title} />
    //       </div>
    //       <span className="card-title">{item.title}</span>
    //       <span
    //         to="/"
    //         className="btn halfway-fab waves-effect waves-light lightblue card-button add-button"
    //         onClick={() => {
    //           this.handleClick(item.id);
    //         }}
    //       >
    //         <i className="material-icons">add</i>
    //       </span>
    //       <div className="card-content">
    //         <p>{item.desc}</p>
    //         <p className="card-price">
    //           <b>Price: {item.price}$</b>
    //         </p>
    //       </div>
    //     </div>
    //   ) : null;
    // });

    // let fruitVegatableList = this.props.items.map((item) => {
    //   return item.category == "vegetable" || item.category == "fruit" ? (
    //     <div className="card" key={item.id}>
    //       <div className="card-image">
    //         <img src={item.img} alt={item.title} />
    //       </div>
    //       <span className="card-title">{item.title}</span>
    //       <span
    //         to="/"
    //         className="btn halfway-fab waves-effect waves-light lightblue card-button add-button"
    //         onClick={() => {
    //           this.handleClick(item.id);
    //         }}
    //       >
    //         <i className="material-icons">add</i>
    //       </span>
    //       <div className="card-content">
    //         <p>{item.desc}</p>
    //         <p className="card-price">
    //           <b>Price: {item.price}$</b>
    //         </p>
    //       </div>
    //     </div>
    //   ) : null;
    // });

    // let meatList = this.props.items.map((item) => {
    //   return item.category == "meat" ? (
    //     <div className="card" key={item.id}>
    //       <div className="card-image">
    //         <img src={item.img} alt={item.title} />
    //       </div>
    //       <span className="card-title">{item.title}</span>
    //       <span
    //         to="/"
    //         className="btn halfway-fab waves-effect waves-light lightblue card-button add-button"
    //         onClick={() => {
    //           this.handleClick(item.id);
    //         }}
    //       >
    //         <i className="material-icons">add</i>
    //       </span>
    //       <div className="card-content">
    //         <p>{item.desc}</p>
    //         <p className="card-price">
    //           <b>Price: {item.price}$</b>
    //         </p>
    //       </div>
    //     </div>
    //   ) : null;
    // });

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

        {/* <h2 className="landing-title">Dairy</h2>
        <div className="box">{dairyList}</div>

        <h2 className="landing-title">Grains</h2>
        <div className="box">{grainsList}</div>
        <h2 className="landing-title">Fruits/Vegetables</h2>
        <div className="box">{fruitVegatableList}</div>
        <h2 className="landing-title">Meat</h2>
        <div className="box">{meatList}</div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
