import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <div className="wrap-button">
      <button {...props} className="btn">
        {children}
      </button>
    </div>
  );
};

export default Button;
