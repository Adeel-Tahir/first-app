import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { BurgerContext } from "./BurgerContext";
function Burger() {
  const { lettuceCount, baconCount, cheeseCount, meatCount } =
    useContext(BurgerContext);
  const [lettuce] = lettuceCount;
  const [bacon] = baconCount;
  const [cheese] = cheeseCount;
  const [meat] = meatCount;
  return (
    <>
      <Header />
      <Main />
      <Footer lettuce={lettuce} bacon={bacon} cheese={cheese} meat={meat} />
    </>
  );
}
export default Burger;
