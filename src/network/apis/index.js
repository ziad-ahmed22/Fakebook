import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";

const API_BASE_URL = "https://tarmeezacademy.com/api/v1";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Handle request process
api.interceptors.request.use((request) => requestHandler(request));

// Handle response process
api.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

// # create post =>
// #  .post("/posts", formData, config)
// # const formData = new FormData();
// #   formData.append("body", content.value);
// #   formData.append("image", image.files[0]);
// #   const config = {
// #     headers: {
// #       authorization: `Bearer ${token}`,
// #       "Content-Type": "multipart/form-data",
// #     },
// #   };

// # get post => .get(`/posts/${postId}`)

// # add comments =>
// # axios.post(/posts/23/comments, {"body": "asd"},
// #   { headers: {
// #       "authorization":"Bearer ${token}
// #   }}
// # )

// # edit post => PUT /posts/5 {"body": "asd"} same as create post
