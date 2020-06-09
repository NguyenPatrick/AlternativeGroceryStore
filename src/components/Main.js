import React from "react";
import { Link } from "react-router-dom";
class Main extends React.Component {
  submit = () => {
    console.log("test");
  };

  render() {
    return (
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Checkout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
