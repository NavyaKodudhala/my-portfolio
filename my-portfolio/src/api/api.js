
import axios from "axios";

export const sendContact = async (payload) => {
  // Example only (replace with your real backend endpoint)
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
  return res.data;
};
