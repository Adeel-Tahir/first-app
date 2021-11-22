import React, { useContext } from "react";
import "../style/Footer.css";
import { BurgerContext } from "./BurgerContext";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  const { lettuce, bacon, cheese, meat, priceCount, loginCheck } =
    useContext(BurgerContext);
  const [lettuceCount, setlettuceCount] = lettuce;
  const [baconCount, setBaconCount] = bacon;
  const [cheeseCount, setCheeseCount] = cheese;
  const [meatCount, setMeatCount] = meat;
  const [price, setPrice] = priceCount;
  const [login, setLogin] = loginCheck;
  const increment = (ingredient) => {
    switch (ingredient) {
      case "lettuce": {
        setlettuceCount(lettuceCount + 1);
        setPrice(price + 0.5);
        break;
      }
      case "bacon": {
        setBaconCount(baconCount + 1);
        setPrice(price + 0.7);

        break;
      }
      case "cheese": {
        setCheeseCount(cheeseCount + 1);
        setPrice(price + 0.4);

        break;
      }
      case "meat": {
        setMeatCount(meatCount + 1);
        setPrice(price + 1.7);

        break;
      }

      default:
        break;
    }
  };
  const decrement = (ingredient) => {
    switch (ingredient) {
      case "lettuce": {
        setlettuceCount(lettuceCount - 1);
        setPrice(price + 0.5);
        break;
      }
      case "bacon": {
        setBaconCount(baconCount - 1);
        setPrice(price + 0.7);
        break;
      }
      case "cheese": {
        setCheeseCount(cheeseCount - 1);
        setPrice(price + 0.4);
        break;
      }
      case "meat": {
        setMeatCount(meatCount - 1);
        setPrice(price + 1.7);
        break;
      }

      default:
        break;
    }
  };
  const makeBurger = (count, element) => {
    return (
      <React.Fragment>
        <div className="BuildControl__BuildControl__ibcUQ">
          <div className="BuildControl__Label__2VLnR">element</div>
          <button
            className={count ? "BuildControl__Less__3X6hg" : "disable_less"}
            disabled={count === 0}
            onClick={() => decrement(element)}
          >
            Less
          </button>
          <button
            className="BuildControl__More__2eQpV"
            onClick={() => increment(element)}
          >
            More
          </button>
        </div>
      </React.Fragment>
    );
  };
  return (
    <div className="BuildControls__BuildControls__220uz">
      <p>
        Current price: <strong>${price.toFixed(2)}</strong>
      </p>
      {makeBurger(lettuceCount, "lettuce")}
      {makeBurger(baconCount, "bacon")}
      {makeBurger(cheeseCount, "cheese")}
      {makeBurger(meatCount, "meat")}
      {meatCount || cheeseCount || baconCount || lettuceCount ? (
        <Link to="/sign_up">
          <button
            className="BuildControls__OrderButton__1ScSk"
            onClick={() => setLogin(true)}
            disabled=""
          >
            SIGN UP TO ORDER
          </button>
        </Link>
      ) : (
        <button className="disable-order" disabled="">
          SIGN UP TO ORDER
        </button>
      )}
    </div>
  );
};
export default Footer;
