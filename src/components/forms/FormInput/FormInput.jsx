import React from "react";
import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form flex__column__center">
      {label && <label>{label}</label>}

      <input type="form__input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
