// api.ts
import axiosInstance from "./axios";

const getMovies = async (search: string, page: number) => {
  try {
    const res = await axiosInstance.get("/", {
      params: {
        s: search,
        page,
      },
    });

    if (res.data.Response === "True") {
      return res.data.Search;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error: ", err);
    return [];
  }
};

export default getMovies;
