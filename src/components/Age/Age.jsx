import React from "react";
import "./Age.css";

const Age = (props) => {
  const handleAge = (e) => {
    const age = parseInt(e.target.value);
    if (!isNaN(age)) {
      props.actionProvider.handleInput(age);
    }
  };

  return (
    <select class="custom-select" onChange={handleAge} title="Enter your Age">
      <option class="option-placeholder" value="" disabled selected>
        Select an Option
      </option>
      {Array.from({ length: 23 }, (_, i) => i + 18).map((age) => (
        <option key={age} value={age} class="option-item">
          {age}
        </option>
      ))}
    </select>
  );
};

export default Age;
