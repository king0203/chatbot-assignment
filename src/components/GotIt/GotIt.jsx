import React from "react";

import "./GotIt.css";

const GotIt = (props) => {
  const options = [
    { text: "Got it",handler: props.actionProvider.handleGotIt, id: 1 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default GotIt;

