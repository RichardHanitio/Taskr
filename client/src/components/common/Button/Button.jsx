import React from 'react'
import "./button.scss";

const Button = ({variant, type, height, width, children}) => {
  return (
    <button type={type || "button"} className={`button button-${variant}`} style={{height: height, width: width || "100%"}}>
      {children}
    </button>
  )
}

export default Button