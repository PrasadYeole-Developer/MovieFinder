"use client";

import axiosInstance from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Movie {
  Title: string;
  Poster: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
}

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchMoviesById = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/", {
          params: { i: id },
        });
        if (res.data.Response === "True") {
          setMovie(res.data);
        } else {
          setMovie(null);
        }
      } catch (err) {
        console.error("Error fetching movie:", err);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesById();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!movie) return <p className="p-4">Not found.</p>;

  return (
    <>
      <div className="w-full p-6 bg-blue-950 relative">
        <Link
        className="text-3xl absolute top-8 left-10 hover:text-gray-200"
        href="/">➥</Link>
        <h1 className="text-6xl font-black mb-8 text-center">{movie.Title}</h1>
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
          alt={movie.Title}
          width={300}
          height={600}
          className="mb-13 rounded w-full h-[50vh] object-contain"
        />
        <p className="text-2xl">
          <strong className="block text-4xl mb-2">Year:</strong> {movie.Year}
        </p>
        <p className="text-2xl mt-5">
          <strong className="block text-4xl mb-2">Genre:</strong> {movie.Genre}
        </p>
        <p className="text-2xl mt-5">
          <strong className="block text-4xl mb-2">Director:</strong>{" "}
          {movie.Director}
        </p>
        <p className="text-2xl mt-5">
          <strong className="block text-4xl mb-2">Actors:</strong>{" "}
          {movie.Actors}
        </p>
        <p className="text-2xl mt-5">
          <strong className="block text-4xl mb-2">Plot:</strong> {movie.Plot}
        </p>
        <p className="text-2xl mt-5">
          <strong className="text-3xl">IMDB Rating:</strong> {movie.imdbRating}
        </p>
      </div>
    </>
  );
};

export default SingleMovie;
