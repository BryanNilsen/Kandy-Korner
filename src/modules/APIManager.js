const url = "http://localhost:5050/";

const APIManager = {
  getResource(resource) {
    return fetch(`${url}${resource}`).then((res) => res.json());
  },
  getResourceById(resource, id) {
    return fetch(`${url}${resource}/${id}`).then((res) => res.json());
  },
  getResourceByIdWithExpand(resource, id, related) {
    return fetch(`${url}${resource}/${id}?_expand=${related}`).then((res) =>
      res.json()
    );
  },
  deleteResource(resource, id) {
    return fetch(`${url}${resource}/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  },
  findUserByUsernameAndPassword(username, password) {
    return fetch(
      `${url}employees?username=${username}&password=${password}`
    ).then((res) => res.json());
  },
};

export default APIManager;
