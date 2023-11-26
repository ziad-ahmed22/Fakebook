import { api } from "./";

const registerUser = async (payload) => await api.post(`/register`, payload);

const loginUser = async (payload) => await api.post(`/login`, payload);

export { registerUser, loginUser };
