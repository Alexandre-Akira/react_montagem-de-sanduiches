import { useState } from "react";
import "./style.css";

function Input({ className, placeholder, label }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={className}>
      <label className="input-wrapper__label" htmlFor={`${label}Form`}>
        {label}
      </label>
      <input
        id={`${label}Form`}
        placeholder={placeholder}
        className={`input-wrapper__input`}
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}

export default Input;
