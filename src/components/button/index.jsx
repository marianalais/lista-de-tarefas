import React from "react";
import "./index.css";

const Button = ({ text, type, ...rest }) => {
  let buttonClass = "button";
  if (type === "primary") {
    buttonClass += " button-primary";
  } else if (type === "secondary") {
    buttonClass += " button-secondary";
  } else if (type === "tertiary") {
    buttonClass += " button-tertiary";
  }
  return (
    <div>
      <button className={buttonClass} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
