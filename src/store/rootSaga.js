import { all } from "redux-saga/effects";

import AuthSagas from "./sagas/authSagas";
import PostsSaga from "./sagas/postsSaga";

export default function* rootSaga() {
  yield all([AuthSagas(), PostsSaga()]);
}
