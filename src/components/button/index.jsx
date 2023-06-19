import React from "react";

const Button = ({ text, onclick, ...rest }) => {
  return (
    <div>
      <button className="button" onClick={() => onclick()} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
