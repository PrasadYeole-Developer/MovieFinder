"use client";
import React, { useEffect, useState } from "react";
import getMovies from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchMoviesFail,
  fetchMoviesStart,
  fetchMoviesSuccess,
} from "@/redux/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state: any) => state);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  // const [query, setQuery] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  const fetchMovies = async (query: string, page: number) => {
    try {
      dispatch(fetchMoviesStart());
      const movies = await getMovies(query, page);
      dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchMoviesFail("Error fetching movies"));
    }

    // try {
    //   setLoading(true);
    //   const movies: any = await getMovies(query, page);
    //   setMovies(movies);
    // } catch (err) {
    //   console.error(err);
    //   setMovies([]);
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchMovies("batman", 1);
  }, []);

  useEffect(() => {
    if (query) {
      fetchMovies(query, page);
    }
  }, [page]);

  const handleSearch = () => {
    if (query) {
      setPage(1);
      fetchMovies(query, 1);
    }
  };

  return (
    <div>
      <div className="mt-2 p-6 w-full h-full flex justify-between">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          Movie Finder
          <Avatar className="rounded-lg">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </h1>
        <Link className="hover:underline underline-offset-2" href={"/about"}>
          About
        </Link>
      </div>

      <div className="p-6 flex gap-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here..."
          className="w-full border py-2 px-3 rounded"
        />
        <button
          onClick={handleSearch}
          className="opacity-60 hover:opacity-100 border px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="p-6">
        {loading ? (
          <p>Loading...</p>
        ) : movies.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {movies.map((movie: any) => (
                <Link href={`movie/${movie.imdbID}`}
                  key={movie.imdbID}
                  className="border rounded overflow-hidden p-4 pb-2 transition duration-300 bg-white dark:bg-gray-900"
                >
                  <Image
                    src={
                      movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"
                    }
                    alt={movie.Title}
                    width={200}
                    height={300}
                    className="w-full h-[18rem] object-cover rounded"
                  />
                  <div className="flex flex-col justify-between gap-2">
                    <h2 className="text-lg font-semibold mt-2 text-gray-800 dark:text-white truncate">
                      {movie.Title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-500 mt-1">
                      Year: {movie.Year}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Genre: {movie.Genre || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      IMDb Rating: {movie.imdbRating || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                      {movie.Plot !== "N/A"
                        ? movie.Plot
                        : "No description available."}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
              <Button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="font-medium text-lg">{page}</span>
              <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
