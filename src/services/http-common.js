import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8100/files3",
  headers: {
    "Content-type": "application/json",
  },
});
