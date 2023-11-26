import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,

  middleware: [saga],
  // devTools: true,
});

saga.run(rootSaga);
