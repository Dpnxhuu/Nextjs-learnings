"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useCinema = (search) => {
  const [result, setResult] = useState(null);
  const [movies, setMovies] = useState(null);
  const [popularLoading, setPopularLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [popularError, setPopularError] = useState("");
  const [searchError, setSearchError] = useState("");

  const fetchPopular = useCallback(async () => {
    try {
      setPopularError("");
      setPopularLoading(true);
      const res = await axios.get("/api/popular");
      setMovies(res.data.results);
    } catch (error) {
      setPopularError(error);
    } finally {
      setPopularLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  const fetchMovie = useCallback(async () => {
    if (!search) return;
    try {
      setSearchError("");
      setSearchLoading(true);
      const res = await axios.get(`/api/search?query=${search}`);
      setResult(res.data.results);
    } catch (error) {
      setSearchError(error);
    } finally {
      setSearchLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return {
    result,
    movies,
    popularLoading,
    searchLoading,
    searchError,
    popularError,
    retry: fetchMovie,
    reloadPopular: fetchPopular,
  };
};

export default useCinema;
