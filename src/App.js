import React from "react";
import { BurgerProvider } from "./BurgerContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Burger from "./Burger.js";
import SignUp from "./SignUp";
import Order from "./Order";
import Checkout from "./Checkout";
import ContactDetails from "./ContactDetails";

function App() {
  return (
    <BurgerProvider>
      <Router>
        <Routes>
          <Route path="/sign_up" exact element={<SignUp />} />
          <Route path="/" exact element={<Burger />} />
          <Route path="/logout" exact element={<Burger />} />
          <Route path="/orders" exact element={<Order />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/contact_details" exact element={<ContactDetails />} />
        </Routes>
      </Router>
    </BurgerProvider>
  );
}
export default App;
