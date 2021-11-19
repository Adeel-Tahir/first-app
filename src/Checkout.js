import React from "react";
import "./Main.css";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
function Checkout() {
  return (
    <>
      <Header />
      <Main />
      <div className="checkout-buttons">
        <Link to="/">
          <button
            class="Button__Button__ajevi Button__Danger__18hYt"
            disabled=""
          >
            Cancel
          </button>
        </Link>
        <Link to="/contact_details">
          <button
            class="Button__Button__ajevi Button__Success__1DMln"
            disabled=""
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
}

export default Checkout;
