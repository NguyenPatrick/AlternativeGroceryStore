import React, { useState } from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import Select from "react-select";
import "react-dropdown/style.css";

import {
  vegatarianFilter,
  glutenFreeFilter,
  showAllFilter,
} from "./actions/cartActions";

const data = [
  {
    value: 1,
    label: "Show All",
  },
  {
    value: 2,
    label: "Vegetarian",
  },
  {
    value: 3,
    label: "Gluten-Free",
  },
];

// // handle onChange event of the dropdown
const handleChange = (e) => {
  console.log(e.value);
  vegatarianFilter();
  switch (e.value) {
    case 1:
      showAllFilter();
      console.log("All");
    case 2:
      vegatarianFilter();
      console.log("Vegatarian");
    case 3:
      glutenFreeFilter();
      console.log("Gluten-Free");
  }
};

const DropdownExampleSearchSelection = () => (
  // <Dropdown
  //   options={options}
  //   placeholder="Select an option"
  //   onchange={populateListProductChoices()}
  // />
  <Select
    placeholder="Select Option"
    value={data.filter((obj) => obj.value === "test")} // set selected value
    options={data} // set list of the data
    onChange={handleChange} // assign onChange function
  />
);

export default DropdownExampleSearchSelection;
