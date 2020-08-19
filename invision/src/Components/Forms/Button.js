import React from "react";
import googleLogo from "../../Assets/imgs/Google__G__Logo.svg";

export const Button = ({ children, ...props }) => {
  return (
    <div className="wrap-button">
      <button
        {...props}
        className={"btn " + (props.type === "google" ? "googleButton" : "")}
      >
        {props.type === "google" && (
          <img
            src={googleLogo}
            alt="Google Logo"
            style={{ width: "30px", marginRight: "20px" }}
          />
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;
