import React from "react";

const InputField = ({type, label, value, onChange, ...props}) => {
  return (
    <span>
      <label htmlFor={type}>{label}</label>
      <input
        id={type}
        name={type}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </span>
  );
};

export default InputField;
