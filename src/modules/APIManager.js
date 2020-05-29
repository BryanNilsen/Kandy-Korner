const url = "http://localhost:5050/";

const APIManager = {
  getResource(resource) {
    return fetch(`${url}${resource}`).then((res) => res.json());
  },
};

export default APIManager;
