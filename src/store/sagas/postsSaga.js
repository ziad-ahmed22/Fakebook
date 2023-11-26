import { put, call, takeEvery } from "redux-saga/effects";

import * as apis from "../../network/apis/posts";
import { showToast } from "../slices/toastSlice";
import { postsResponse } from "../slices/postsSlice";

function* getPostsSaga({ payload }) {
  try {
    const response = yield call(apis.getPosts, payload);
    yield put(postsResponse(response.data?.data));
  } catch (error) {
    yield put(
      showToast({
        type: "error",
        message: error.response.data?.message,
      })
    );
  }
}

export default function* PostsSaga() {
  yield takeEvery("posts/getPosts", getPostsSaga);
}
