import React from "react";
import "./index.css";

const Input = ({ type, value, label, placeholder, onChange, ...rest }) => {
  return (
    <div>
      <h1>{label}</h1>
      <input
        {...rest}
        className="input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
