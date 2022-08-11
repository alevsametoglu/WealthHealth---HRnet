import './FormControl.scss';

/**
 * create form controls
 */

const FormControl = ({
  inputType,
  label,
  name,
  style,
  inputStyle,
  placeholder,
  options,
  aria,
  formState,
  register,
}) => {
  let formInput;

  const error = formState?.errors?.[name];
  switch (inputType) {
    case 'input':
      formInput = (
        <input
          style={inputStyle}
          placeholder={placeholder}
          className={!!error ? 'invalid' : ''}
          type="text"
          aria-labelledby={aria}
          {...register}
        />
      );
      break;

    case 'number-input':
      formInput = (
        <input
          style={inputStyle}
          placeholder={placeholder}
          className={!!error ? 'invalid' : ''}
          type="number"
          aria-labelledby={aria}
          {...register}
        />
      );
      break;

    case 'date-picker':
      formInput = (
        <>
          <input
            style={inputStyle}
            placeholder={placeholder}
            className={!!error ? 'invalid' : ''}
            type="date"
            aria-labelledby={aria}
            {...register}
          />
          {/* <ReactDatePicker
            dateFormat="dd-MM-yyyy"
            aria-required="true"
            style={inputStyle}
            placeholder={placeholder}
            className={!!error ? 'invalid' : ''}
            aria-labelledby={aria}
            autoComplete="off"
            showYearDropdown
            // {...register}
            name={register.name}
            onBlur={register.onBlur}
            ref={register.ref}
            onChangeRaw={e => {
              // e.target.name = name;
              register.onChange(e);
            }}
          /> */}
          {error?.message && (
            <span style={{ color: 'red' }}>{error.message}</span>
          )}
        </>
      );
      break;

    case 'select':
      formInput = (
        <select
          style={inputStyle}
          placeholder={placeholder}
          className={!!error ? 'invalid' : ''}
          aria-labelledby={aria}
          {...register}>
          {options.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }

  return (
    <div className="form-control" style={{ ...style }}>
      <span className="label">{label || name}</span> {formInput}
    </div>
  );
};

export default FormControl;
