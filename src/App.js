import React from "react";
import { BurgerProvider } from "./view/BurgerContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Burger from "./view/Burger.js";
import Header from "./view/Header";
import SignUp from "./view/SignUp";
import Order from "./view/Order";
import Checkout from "./view/Checkout";
import ContactDetails from "./view/ContactDetails";
import ErrorComponent from "./view/ErrorComponent";

function App() {
  return (
    <>
      <BurgerProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="*" element={<ErrorComponent />} />
            <Route path="/sign_up" exact element={<SignUp />} />
            <Route path="/" exact element={<Burger />} />
            <Route path="/logout" exact element={<Burger />} />
            <Route path="/orders" exact element={<Order />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/contact_details" exact element={<ContactDetails />} />
          </Routes>
        </Router>
      </BurgerProvider>
    </>
  );
}
export default App;
