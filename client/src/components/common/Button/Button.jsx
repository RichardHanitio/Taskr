import React from "react";
import "./button.scss";

const Button = ({ variant, type, height, width, children, func}) => {
  return (
    <button
      type={type || "button"}
      className={`button button-${variant}`}
      style={{ height: height, width: width || "100%" }}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
