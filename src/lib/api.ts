import { log } from "console";
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
      const basicDets = res.data.Search;

      const detailedMovies = await Promise.all(
        basicDets.map(async (movie: any) => {
          const detailRes = await axiosInstance.get("/", {
            params: {
              i: movie.imdbID,
            },
          });
          return detailRes.data;
        })
      );
      return detailedMovies;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error: ", err);
    return [];
  }
};

export default getMovies;

