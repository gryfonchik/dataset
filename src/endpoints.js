import axios from "axios";
const url = 'http://localhost:8000';

const endpoints = {
    getMe: (token) =>
    axios.get(url + "/v1/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

    createUser: (token) =>
    axios.post(
      url + "/v1/user/",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),

    getProjects: (token, offset, limit) =>
    axios.get(url + "/v1/project/", {
      params: {
        offset: offset,
        limit: limit,
      },

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

    createProject: (token, projectName, description) =>
    axios.post(
      url + "/v1/project/",
      {
        title: projectName,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
    
  exist: (token) =>
    axios.get("/api/current-user-exist/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  get: (token) =>
    axios.get("/api/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  update: (token, tags) =>
    axios.put(
      "/api/me/",
      {
        tags: tags,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),

  register: (token) =>
    axios.post(
      "/api/me/",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
};

export default endpoints;