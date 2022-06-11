import "./FormControl.scss";
import Input from "./components/Input";

import { Controller } from "react-hook-form";
import DatePicker from "./components/DatePicker";
import Select from "./components/Select";
import NumberInput from "./components/NumberInput";

const FormControl = ({
  inputType,
  label,
  name,
  style,
  inputStyle,
  placeholder,
  control,
  rules,
  options,
  aria,
}) => {
  let formInput;

  switch (inputType) {
    case "input":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => {
            return (
              <Input
                style={inputStyle}
                placeholder={placeholder}
                fieldRenderProps={field}
                fieldState={fieldState}
                aria={aria}
              />
            );
          }}
        />
      );
      break;

    case "date-picker":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <DatePicker
              style={inputStyle}
              placeholder={placeholder}
              fieldRenderProps={field}
              fieldState={fieldState}
              aria={aria}
            />
          )}
        />
      );
      break;
    case "number-input":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <NumberInput
              style={inputStyle}
              placeholder={placeholder}
              fieldRenderProps={field}
              fieldState={fieldState}
              aria={aria}
            />
          )}
        />
      );
      break;

    case "select":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <Select
              style={inputStyle}
              placeholder={placeholder}
              fieldRenderProps={field}
              fieldState={fieldState}
              options={options}
              aria={aria}
            />
          )}
        />
      );
      break;
    default:
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <Input
              style={inputStyle}
              placeholder={placeholder}
              fieldRenderProps={field}
              fieldState={fieldState}
              aria={aria}
            />
          )}
        />
      );
      break;
  }

  return (
    <div className="form-control" style={{ ...style }}>
      <span className="label">{label || name}</span> {formInput}
    </div>
  );
};

export default FormControl;
