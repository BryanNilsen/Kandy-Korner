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
  findUserByEmail(email) {
    return fetch(`${url}employees?email=${email}`).then((res) => res.json());
  },
  getProductLocations(productId) {
    return fetch(
      `${url}productLocations?productId=${productId}&_expand=location`
    ).then((res) => res.json());
  },
  postResource(resource, newItem) {
    return fetch(`${url}${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then((data) => data.json());
  },
  updateResource(resource, newItem) {
    return fetch(`${url}${resource}/${newItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then((data) => data.json());
  },
};

export default APIManager;
