import { useState } from "react";
import PropTypes from "prop-types";
import {
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

import "./InputField.scss";

const InputField = ({
  name,
  value,
  onChange,
  id,
  label,
  type,
  placeholder,
  required,
  defaultValue,
  isInputHasErr,
  errMsg,
  disabled,
  multiline,
  rows,
  maxRows,
  minRows,
  endAdornment,
  fullWidth,
  inputClass,
  inputWrapperClass,
  labelClassName,
  labelAdornment,
  inputEndAdorment,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`input-wrapper ${inputWrapperClass}`}>
      <FormControl variant="filled" className="w-100">
        <InputLabel
          htmlFor={id || name}
          className={`${labelClassName} ${isInputHasErr ? "Mui-error" : ""}`}
        >
          {label}
          {required ? <span className="err-color"> *</span> : ""}
          {labelAdornment && <span className="ms-2">{labelAdornment}</span>}
        </InputLabel>

        <FilledInput
          id={id || name}
          name={name}
          type={showPassword ? "text" : type}
          value={value || ""}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
          placeholder={!value && disabled ? "" : placeholder}
          required={required}
          disabled={disabled}
          error={isInputHasErr}
          fullWidth={fullWidth || true}
          multiline={multiline}
          rows={rows}
          maxRows={maxRows}
          minRows={minRows}
          className={`${inputClass}`}
          disableUnderline={true}
          autoComplete="off"
          endAdornment={
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOutlined className="end-icon-space" />
                  ) : (
                    <VisibilityOffOutlined className="end-icon-space" />
                  )}
                </IconButton>
              </InputAdornment>
            ) : (
              endAdornment
            )
          }
          {...props}
        />
        {inputEndAdorment}

        <FormHelperText error={isInputHasErr} className={`text-end`}>
          {isInputHasErr && errMsg}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  isInputHasErr: PropTypes.bool,
  errMsg: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  inputEndAdorment: PropTypes.element,
  startAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  endAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  fullWidth: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  inputClass: PropTypes.string,
  inputWrapperClass: PropTypes.string,
  labelClassName: PropTypes.string,
  labelAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
