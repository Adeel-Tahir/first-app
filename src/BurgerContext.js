import React, { useState, createContext } from "react";

export const BurgerContext = createContext();

export const BurgerProvider = (props) => {
  const [lettuce, setlettuce] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [price, setPrice] = useState(3.0);
  const [login, setLogin] = useState(false);

  return (
    <BurgerContext.Provider
      value={{
        lettuceCount: [lettuce, setlettuce],
        baconCount: [bacon, setBacon],
        cheeseCount: [cheese, setCheese],
        meatCount: [meat, setMeat],
        priceCount: [price, setPrice],
        loginCheck: [login, setLogin],
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};
