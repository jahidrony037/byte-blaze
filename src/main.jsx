import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks/Bookmarks.jsx";
import Home from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    {/* <App /> */}
  </>
);
