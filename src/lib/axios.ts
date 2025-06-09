import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
  },
});

export default axiosInstance;
