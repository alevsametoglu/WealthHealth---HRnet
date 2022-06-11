const Input = (props) => {
  return (
    <>
      <input
        className={!!props.fieldState.error ? "invalid" : ""}
        style={props.style}
        placeholder={props.placeholder}
        type="text"
        aria-labelledby={props.aria}
        {...props.fieldRenderProps}
      />
      {}
    </>
  );
};

export default Input;
