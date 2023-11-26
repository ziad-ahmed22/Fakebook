import loaderReducer from "./slices/loaderSlice";
import toastReducer from "./slices/toastSlice";
import authReducer from "./slices/authSlice";
import registrationModalReducer from "./slices/registrationModalSlice";
import postsReducer from "./slices/postsSlice";

const rootReducer = {
  loader: loaderReducer,
  toast: toastReducer,
  auth: authReducer,
  registrationModal: registrationModalReducer,
  posts: postsReducer,
};

export default rootReducer;
