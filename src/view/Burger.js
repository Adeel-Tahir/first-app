import React, { useContext } from "react";
import Footer from "./Footer";
import Main from "./Main";
import { BurgerContext } from "./BurgerContext";
function Burger() {
  const { lettuce, bacon, cheese, meat } = useContext(BurgerContext);
  const [lettuceCount] = lettuce;
  const [baconCount] = bacon;
  const [cheeseCount] = cheese;
  const [meatCount] = meat;
  return (
    <React.Fragment>
      <Main />
      <Footer
        lettuce={lettuceCount}
        bacon={baconCount}
        cheese={cheeseCount}
        meat={meatCount}
      />
    </React.Fragment>
  );
}
export default Burger;
