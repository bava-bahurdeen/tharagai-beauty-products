import axios from "axios";

export default axios.create({
//   baseURL: "http://127.0.0.1:8000/tharagai",
  baseURL: `${import.meta.env.VITE_LOCAL_URL}`,
});
