import { useState } from "react";
import "./style.css";

function Input({ className }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return <input className={className} value={value} onChange={(event) => handleChange(event)} />;
}

export default Input;
