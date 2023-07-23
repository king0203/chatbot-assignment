import React from "react";

const Age = (props) => {

  const handleAge = (e) => {
    const age = parseInt(e.target.value);
    if (!isNaN(age)) {
      props.actionProvider.handleUserInput(age);
    }
  };

  return (
    <select onChange={handleAge} title="Enter your Age">
      <option>Select an Option</option>
      {Array.from({ length: 24 }, (_, i) => i + 18).map((age) => (
        <option key={age} value={age}>
          {age}
        </option>
      ))}
    </select>
  );
};

export default Age;
