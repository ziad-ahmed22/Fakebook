import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  btnClassName,
  labelClassName,
  label,
  type,
  outlined,
  disabled,
  fullWidth,
  onClick,
}) => (
  <MuiButton
    className={`my-btn ${btnClassName}`}
    variant={outlined ? "outlined" : "contained"}
    type={type ? type : "button"}
    disabled={disabled}
    onClick={onClick}
    fullWidth={fullWidth}
  >
    <span className={labelClassName}>{label}</span>
  </MuiButton>
);

export default Button;

Button.propTypes = {
  btnClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.string,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};
