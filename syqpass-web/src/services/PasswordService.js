import apiService from "../utils/http";

const getAll = () => {
  return apiService.get("/passwords").then(res => res).catch(err => err);
};

const get = (id) => {
  return apiService.get(`/password/${id}`).then(res => res).catch(err => err);
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
