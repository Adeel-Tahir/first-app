import React, { useContext } from "react";
import Header from "./Header";
import "./Footer.css";
import { BurgerContext } from "./BurgerContext";
import "./App.css";
import "./Order.css";

function Order() {
  const { lettuceCount, baconCount, cheeseCount, meatCount, priceCount } =
    useContext(BurgerContext);
  const [lettuce] = lettuceCount;
  const [bacon] = baconCount;
  const [cheese] = cheeseCount;
  const [meat] = meatCount;
  const [price] = priceCount;

  return (
    <>
      <Header />
      <main className="Layout__Content__3KSp3">
        <div className="Modal__Modal__cd320"></div>
        <div className="Modal__Modal__cd320"></div>
        <div class="Order__Order__W-Npf">
          <p>
            Ingredients: <span class="order-list">bacon ({bacon})</span>
            <span class="order-list">cheese ({cheese})</span>
            <span class="order-list">lettuce ({lettuce})</span>
            <span class="order-list">meat ({meat})</span>
          </p>
          <p>
            Price <strong>USD {price.toFixed(2)}</strong>
          </p>
        </div>
      </main>
    </>
  );
}
export default Order;
