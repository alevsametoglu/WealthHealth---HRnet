import React from "react";

const Select = (props) => {
  return (
    <select
      className={!!props.fieldState.error ? "invalid" : ""}
      style={props.style}
      placeholder={props.placeholder}
      {...props.fieldRenderProps}
      aria-labelledby={props.aria}
    >
      {props.options.map((option, i) => (
        <option value={option.value} key={i}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
