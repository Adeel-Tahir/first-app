import React from "react";
import "../style/Main.css";
import "../style/SignUp.css";
import { Link } from "react-router-dom";
import Main from "./Main";
function Checkout() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Checkout;
