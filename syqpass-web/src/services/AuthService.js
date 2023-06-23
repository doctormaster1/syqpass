import apiService from "../utils/http";

const login = (data) => {
  return apiService.get();
};

const register = (data) => {
  return apiService.post();
};

const logout = (token) => {
  return apiService.get();
};

const AuthService = { login, register, logout };

export default AuthService;
