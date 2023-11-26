import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Toast = () => {
  const message = useSelector((state) => state.toast.message);
  const type = useSelector((state) => state.toast.type);
  const [msgsArr, setMsgsArr] = useState([]);

  useEffect(() => {
    setMsgsArr(message ? message.split(",") : []);
  }, [message]);

  useEffect(() => {
    msgsArr.map((msg) => {
      toast(msg, {
        type: type,
        progress: undefined,
      });
    });
  }, [msgsArr]);

  // npm install --save react-toastify
  // theme => colored, light, dark
  // type => default, success, error, info, warning
  // position => top-left, top-right, top-center, bottom-left, ...
  // transition => bounce, slide, zoom, flip

  return (
    <div className="toast-con">
      <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={6}
        // progress="0" // 0 to 1
      />
    </div>
  );
};
