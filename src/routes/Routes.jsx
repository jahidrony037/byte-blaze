import { createBrowserRouter } from "react-router-dom";
import Author from "../components/Author/Author";
import Content from "../components/Content/Content";
import MainLayout from "../layouts/MainLayout";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
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
        loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },

      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
