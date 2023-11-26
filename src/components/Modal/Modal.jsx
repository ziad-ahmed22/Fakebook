import { CloseOutlined } from "@mui/icons-material";
import { Modal as MUIModal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

import PropTypes from "prop-types";
import { useRef } from "react";
import "./Modal.scss";

export default function Modal({
  title,
  open,
  setOpen,
  modalBody,
  activateBackdrop,
}) {
  const modalRef = useRef();

  const closeBackdrop = () => {
    if (activateBackdrop) {
      setOpen(false);
    } else {
      modalRef.current.classList.add("scale-modal");
      setTimeout(() => {
        modalRef.current.classList.remove("scale-modal");
      }, 1000);
    }
  };

  return (
    <div>
      <MUIModal
        open={open}
        onClose={closeBackdrop} // close when click on backdrop
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className="modal-box" ref={modalRef}>
            <div className="modal-title flex-between px-2 py-3">
              <h4 className="title mb-0 ms-1 fs-22 fw-bold">
                {title && title}
              </h4>
              <CloseOutlined
                className="close-icon"
                onClick={() => setOpen(false)}
              />
            </div>

            {modalBody}
          </div>
        </Fade>
      </MUIModal>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  modalBody: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  activateBackdrop: PropTypes.bool,
};
