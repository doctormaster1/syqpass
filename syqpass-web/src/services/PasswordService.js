import apiService from "../utils/http";

const getAll = () => {
  return apiService.get("/passwords");
};

const get = (id) => {
  return apiService.get(`/password/${id}`);
};

const create = (data) => {
  return apiService.post("/password", data);
};

const update = (id, data) => {
  return apiService.put(`/password/${id}`, data);
};

const remove = (id) => {
  return apiService.delete(`/password/${id}`);
};

const PasswordService = { getAll, get, create, update, remove };

export default PasswordService;
