import { store } from "../../store/store";
import { showToast } from "../../store/slices/toastSlice";
import { showHideLoader } from "../../store/slices/loaderSlice";

export const isHandlerEnabled = (config = {}) => {
  return Object.prototype.hasOwnProperty.call(config, "handlerEnabled") &&
    !config.handlerEnabled
    ? false
    : true;
};

let numberOfAjaxCAllPending = 0;

// Request Success
export const requestHandler = (request) => {
  numberOfAjaxCAllPending++;

  if (isHandlerEnabled(request)) {
    store.dispatch(showHideLoader(true));
  }

  const token = JSON.parse(localStorage.getItem("user"))?.token;
  request.params = request.params || {};
  request.params["token"] = token;

  return request;
};

// Response Success
export const successHandler = (response) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(response)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }
  return response;
};

// Response Error
export const errorHandler = (error) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(error.config)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }

  if (error?.message === "Network Error") {
    store.dispatch(
      showToast({
        type: "error",
        message: "No Internet Connection",
      })
    );
  } else {
    store.dispatch(
      showToast({
        type: "error",
        message: "Sorry something went wrong!",
      })
    );
  }

  return Promise.reject({ ...error });
};
