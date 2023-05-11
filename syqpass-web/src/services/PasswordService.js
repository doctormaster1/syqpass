import apiService from "../http";

const getAll = () => {
  return http.get("/passwords");
};

const get = (id) => {
  return http.get(`/password/${id}`);
};

const create = (data) => {
  return http.post("/password", data);
};

const update = (id, data) => {
  return http.put(`/password/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/password/${id}`);
};

const PasswordService = { getAll, get, create, update, remove };

export default PasswordService;
