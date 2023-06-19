import React from "react";

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
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
