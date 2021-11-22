import React, { useContext } from "react";
import "../style/Footer.css";
import { BurgerContext } from "./BurgerContext";
import "../App.css";
import "../style/Order.css";

function Order() {
  const { lettuce, bacon, cheese, meat, priceCount } =
    useContext(BurgerContext);
  const [lettuceCount] = lettuce;
  const [baconCount] = bacon;
  const [cheeseCount] = cheese;
  const [meatCount] = meat;
  const [price] = priceCount;

  return (
    <React.Fragment>
      <main className="Layout__Content__3KSp3">
        <div className="Modal__Modal__cd320"></div>
        <div className="Modal__Modal__cd320"></div>
        <div class="Order__Order__W-Npf">
          <p>
            Ingredients: <span class="order-list">bacon ({baconCount})</span>
            <span class="order-list">cheese ({cheeseCount})</span>
            <span class="order-list">lettuce ({lettuceCount})</span>
            <span class="order-list">meat ({meatCount})</span>
          </p>
          <p>
            Price <strong>USD {price.toFixed(2)}</strong>
          </p>
        </div>
      </main>
    </React.Fragment>
  );
}
export default Order;
