import React from "react";

const NumberInput = (props) => {
  return (
    <input
      className={!!props.fieldState.error ? "invalid" : ""}
      style={props.style}
      placeholder={props.placeholder}
      {...props.fieldRenderProps}
      type="number"
      aria-labelledby={props.aria}
    />
  );
};

export default NumberInput;
