import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-84272.cloudfunctions.net/api",
});

export default instance;
