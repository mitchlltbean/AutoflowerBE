const axios = require("axios");
const URL_PREFIX = "http://localhost:8080";
// const URL_PREFIX= "https://enigmatic-waters-59072.herokuapp.com"

const API = {
  login: (employeeData) => {
    return axios.post(`${URL_PREFIX}/api/login`, employeeData);
  },

  create: (employeeData, token) => {
    return axios.post(`${URL_PREFIX}/api/signup`, employeeData, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  getAllemployees: (id, token) => {
    return axios.get(`${URL_PREFIX}/api/employees`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  getSingleCategoryWithProducts: (id, token) => {
    return axios.get(`${URL_PREFIX}/api/category/${id}/products`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  getSingleCategoryWithProducts: (group, token) => {
    return axios.get(`${URL_PREFIX}/api/category/${group}/products`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },
};

export default API;
