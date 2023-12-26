import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewError from "../components/NewError";
import Header from "./Header";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import WatchPage from "./WatchPage";

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      element: <Login />,
      path: "/",
    },
    {
      element: <Browse />,
      path: "/browse",
      children: [
        {
          element: (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          ),
          path: "/browse",
        },
        {
          element: <GptSearch />,
          path: "/browse/gptsearch",
        },
        {
          element: <WatchPage />,
          path: "/browse/watchpage",
        },
      ],
    },
    {
      element: <NewError />,
      path: "/error",
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
