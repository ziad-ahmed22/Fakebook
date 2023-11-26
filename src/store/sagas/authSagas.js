import { put, call, takeEvery } from "redux-saga/effects";

import * as apis from "../../network/apis/auth";
import { loginResponse } from "../slices/authSlice";
import { showToast } from "../slices/toastSlice";
import { showHideRegistrationModal } from "../slices/registrationModalSlice";

function* regiserUserSaga({ payload }) {
  try {
    yield call(apis.registerUser, payload);
    yield put(
      showToast({
        type: "success",
        message: "Registered Successfully",
      })
    );
    yield put(showHideRegistrationModal(false));
  } catch (error) {
    yield put(
      showToast({
        type: "error",
        message: error.response.data?.message,
      })
    );
  }
}

function* loginSaga({ payload }) {
  try {
    const response = yield call(apis.loginUser, payload);
    yield put(loginResponse(response.data));

    const user = yield { ...response.data.user, token: response.data.token };
    yield localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    yield put(
      showToast({
        type: "error",
        message:
          error.response.data?.message ==
          "The provided credentials are incorrect."
            ? "The username or password is incorrect"
            : error.response.data?.message,
      })
    );
  }
}

export default function* AuthSagas() {
  yield takeEvery("auth/registerNewUser", regiserUserSaga);
  yield takeEvery("auth/loginRequest", loginSaga);
}
