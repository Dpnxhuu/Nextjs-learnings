"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useMovieDetail = (id) => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

   const fetchDetail = useCallback( async () => {
    if (!id) return;
      try {
        setError("");
        setLoading(true);
        const res = await axios.get(`/api/details/${id}`);
        setDetail(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }, [id]);


  useEffect(()=>{
    fetchDetail();
  },[fetchDetail])

  return { detail, loading, error, retry: fetchDetail };
};

export default useMovieDetail;
