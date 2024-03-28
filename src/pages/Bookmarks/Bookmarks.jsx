import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Blog from "../../components/Blog/Blog";
import EmptyState from "../../components/EmptyState/EmptyState";
import { deleteBlog, getBlogs } from "../../utilites/localstorage";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  //   console.log(blogs);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDeleteBlog = (id) => {
    // console.log(typeof id);
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1) {
    return (
      <EmptyState
        message="No Bookmarks Found"
        address="/blogs"
        label="Browse Blogs"
      />
    );
  }

  return (
    <div className="grid px-4 lg:px-12 sm:px-8 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Helmet>
        <title>Bookmarks</title>
      </Helmet>
      {blogs.map((blog) => (
        <Blog
          deletable={true}
          handleDeleteBlog={handleDeleteBlog}
          blog={blog}
          key={blog.id}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
