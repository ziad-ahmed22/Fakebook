import { useState } from "react";
import "./FileInput.scss";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PropTypes from "prop-types";

export default function FileInput({
  id,
  name,
  label,
  isInputHasErr,
  errMsg,
  onChange,
}) {
  const [userImgName, setUserName] = useState("");

  const handleUserImgChange = (e) => {
    onChange(e.currentTarget.files[0]);
    setUserName(e.currentTarget.files[0].name);
  };

  return (
    <div className={`file-input-wrapper ${isInputHasErr && "error"}`}>
      <label htmlFor={id || name}>
        {label} <br />
        <input
          id={id || name}
          name={name}
          type="file"
          hidden
          //   accept="image/png, .svg"
          onChange={handleUserImgChange}
        />
        <CameraAltIcon className="my-1" />
        <br />
        <span className="file-name">
          {userImgName ? userImgName : "No File Chosen"}
        </span>
      </label>

      {isInputHasErr && (
        <p className="helper-text mb-0 mt-2 text-end">{errMsg}</p>
      )}
    </div>
  );
}

FileInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  isInputHasErr: PropTypes.bool,
  errMsg: PropTypes.string,
  onChange: PropTypes.func,
};
