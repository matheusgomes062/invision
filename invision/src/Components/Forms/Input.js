import React from "react";
// import styles from "./input.scss";

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className="wrap-input">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};
export default Input;
