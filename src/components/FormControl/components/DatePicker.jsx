import React from "react";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";

const DatePickerComponent = (props) => {
  return (
    // <ReactDatePicker
    //   dateFormat="dd-MM-yyyy"
    //   aria-required="true"
    //   tabIndex={props.index}
    //   className={!!props.fieldState.error ? "invalid" : ""}
    //   onChange={props.fieldRenderProps.onChange}
    //   onBlur={props.fieldRenderProps.onBlur}
    //   selected={props.fieldRenderProps.value}
    //   placeholder={props.placeholder}
    //   {...props.fieldRenderProps}
    //   locale={fr}
    //   ariaLabelledBy={props.aria}
    // />
    <input
      type="date"
      className={!!props.fieldState.error ? "invalid" : ""}
      style={props.style}
      dateFormat="dd-MM-yyyy"
      aria-required="true"
      tabIndex={props.index}
      onChange={props.fieldRenderProps.onChange}
      onBlur={props.fieldRenderProps.onBlur}
      selected={props.fieldRenderProps.value}
      locale={fr}
      placeholder={props.placeholder}
      {...props.fieldRenderProps}
    ></input>
  );
};

export default DatePickerComponent;
