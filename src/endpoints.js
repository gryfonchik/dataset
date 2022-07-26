import axios from "axios";

const endpoints = {
    getMe: (token) =>
    axios.get("https://imct-data-labeling-app.herokuapp.com/v1/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

    createUser: (token) =>
    axios.post(
      "https://imct-data-labeling-app.herokuapp.com/v1/user/",
      {},
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