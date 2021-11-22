import React from "react";
import errorImage from "../assets/404.png";
import "../App.css";

function ErrorComponent() {
  return <img src={errorImage} alt="myBurger" className="not-found-img" />;
}

export default ErrorComponent;
