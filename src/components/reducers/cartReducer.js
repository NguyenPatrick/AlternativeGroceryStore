import Salmon from "../../images/salmon.svg";
import Steak from "../../images/steak.svg";
import Eggs from "../../images/eggs.jpg";
import Spinach from "../../images/spinach.jpg";
import Milk from "../../images/milk.svg";
import Pasta from "../../images/pasta.svg";
import Avocado from "../../images/avocado.svg";
import Bread from "../../images/bread.svg";
import Watermelon from "../../images/watermelon.jpg";
import Banana from "../../images/banana.jpg";
import Chicken from "../../images/chicken.jpg";
import Muffin from "../../images/muffin.jpg";

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  VEGETARIAN,
  GLUTEN_FREE,
  SHOW_ALL,
  ORGANIC,
  SHOW_CURRENT,
  MEAT,
  DAIRY,
  FRUITVEGETABLES,
  GRAINS,
} from "../actions/action-types/cart-actions";
import { statements } from "@babel/template";

const currentStates = [];
const showAllState = {
  items: [
    {
      id: 4,
      title: "Spinach",
      price: 5,
      vegetarian: true,
      glutenFree: true,
      organic: true,
      category: "fruit/vegetable",
      img: Spinach,
    },
    {
      id: 11,
      title: "Banana",
      price: 5,
      vegetarian: true,
      glutenFree: true,
      organic: true,
      category: "fruit/vegetable",
      img: Banana,
    },
    {
      id: 14,
      title: "Muffin",
      price: 5,
      vegetarian: true,
      glutenFree: false,
      organic: false,
      category: "grains",
      img: Muffin,
    },
    {
      id: 12,
      title: "Watermelon",
      price: 10,
      vegetarian: true,
      glutenFree: true,
      organic: true,
      category: "fruit/vegetable",
      img: Watermelon,
    },

    {
      id: 3,
      title: "Eggs",
      price: 10,
      vegetarian: true,
      glutenFree: true,
      organic: true,
      category: "dairy",
      img: Eggs,
    },
    {
      id: 8,
      title: "Pasta",
      price: 12,
      vegetarian: true,
      glutenFree: false,
      organic: false,
      category: "grains",
      img: Pasta,
    },
    {
      id: 9,
      title: "Avocado",
      price: 13,
      vegetarian: true,
      glutenFree: true,
      organic: true,
      category: "fruit/vegetable",
      img: Avocado,
    },
    {
      id: 7,
      title: "Milk",
      price: 15,
      vegetarian: true,
      glutenFree: true,
      organic: true,
      category: "dairy",
      img: Milk,
    },
    {
      id: 10,
      title: "Bread",
      price: 15,
      vegetarian: true,
      glutenFree: false,
      organic: false,
      category: "grains",
      img: Bread,
    },
    {
      id: 13,
      title: "Chicken",
      price: 20,
      vegetarian: false,
      glutenFree: true,
      organic: true,
      category: "meat",
      img: Chicken,
    },
    {
      id: 1,
      title: "Salmon",
      price: 30,
      vegetarian: false,
      glutenFree: true,
      organic: true,
      category: "meat",
      img: Salmon,
    },
    {
      id: 2,
      title: "Steak",
      price: 45,
      vegetarian: false,
      glutenFree: true,
      organic: true,
      category: "meat",
      img: Steak,
    },
  ],
  addedItems: [],
  total: 0,
  previousState: [],
};

const cartReducer = (state = showAllState, action) => {
  if (action.type === VEGETARIAN) {
    console.log("1 - Vegetarian");
    return {
      ...state,
      items: state.items.filter((item) => item.vegetarian === true),
      previousState: state,
    };
  }

  if (action.type === GLUTEN_FREE) {
    console.log("1 - Gluten Free");
    return {
      ...state,
      items: state.items.filter((item) => item.glutenFree === true),
      previousState: state,
    };
  }

  if (action.type === ORGANIC) {
    console.log("1 - Organic");

    return {
      ...state,
      items: state.items.filter((item) => item.organic === true),
      previousState: state,
    };
  }

  if (action.type === SHOW_ALL) {
    console.log("1 - Show All");
    return {
      ...showAllState,
      previousState: showAllState,
    };
  }

  if (action.type === SHOW_CURRENT) {
    console.log(state.previousState);
    console.log("1 - Show Current");
    return {
      ...state.previousState,
      items: state.previousState.items,
      previousState: state.previousState,
    };
  }

  if (action.type === MEAT) {
    console.log("1 - Show Meat");
    console.log(state.previousState);
    return {
      ...state.previousState,
      items: state.previousState.items.filter(
        (item) => item.category === "meat"
      ),
      previousState: state.previousState,
    };
  }

  if (action.type === DAIRY) {
    console.log("1 - Show Dairy");
    console.log(state.previousState);
    return {
      ...state.previousState,
      items: state.previousState.items.filter(
        (item) => item.category === "dairy"
      ),
      previousState: state.previousState,
    };
  }

  if (action.type === GRAINS) {
    console.log("1 - Show Grains");
    console.log(state.previousState);
    return {
      ...state.previousState,
      items: state.previousState.items.filter(
        (item) => item.category === "grains"
      ),
      previousState: state.previousState,
    };
  }

  if (action.type === FRUITVEGETABLES) {
    console.log("1 - Show Fruit/Vegetables");
    console.log(state.previousState);
    return {
      ...state.previousState,
      items: state.previousState.items.filter(
        (item) => item.category === "fruit/vegetable"
      ),
      previousState: state.previousState,
    };
  }

  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
