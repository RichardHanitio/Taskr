import React from 'react'
import "./button.scss";

const Button = ({variant, type, height, width, children}) => {
  return (
    <button type={type} className={`btn btn-${variant}`} style={{height: height, width: width || "100%"}}>
      {children}
    </button>
  )
}

export default Button