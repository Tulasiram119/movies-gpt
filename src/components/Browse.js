import React from "react";
import Header from "./Header";
import useNowPalyingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import { Outlet } from "react-router-dom";

export default function Browse() {
  useNowPalyingMovies(1);
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
