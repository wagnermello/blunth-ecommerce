import React from "react";
import "./Button.scss";

const Button = ({ children, buttonClass, onClick, ...otherProps }) => {
  return (
    <button className={`btn ${buttonClass}`} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
