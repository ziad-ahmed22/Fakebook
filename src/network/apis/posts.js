import { api } from "./";

const getPosts = async (params) => await api.get(`/posts`, { params });

export { getPosts };
