import React from "react";
import "./button.scss";
import {useNavigate} from "react-router-dom";

const Button = ({ variant, type, height, width, children, func, link, className}) => {
  let navigate = useNavigate();
  return (
    <button
      type={type || "button"}
      className={`button button-${variant} ${className}`}
      style={{ height: height, width: width || "100%" }}
      onClick={link? ()=>navigate(link) : func}
    >
      {children}
    </button>
  );
};

export default Button;
