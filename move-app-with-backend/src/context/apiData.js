"use client";

import { createContext, useState, useRef } from "react";
import useCinema from "../hooks/useCinema";

export const myContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const timerRef = useRef(null);

  const {
    result,
    movies,
    popularLoading,
    searchLoading,
    searchError,
    popularError,
    retry,
    reloadPopular
  } = useCinema(query);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setQuery(value);
    }, 500);
  };

  return (
    <myContext.Provider
      value={{
        result,
        handleSearch,
        popularLoading,
        searchLoading,
        searchError,
        popularError,
        movies,
        search,
        setSearch,
        retry,
        reloadPopular,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
