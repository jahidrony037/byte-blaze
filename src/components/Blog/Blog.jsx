import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import placeHolder from "../../assets/404.jpg";
const Blog = ({ blog, deletable, handleDeleteBlog }) => {
  const { title, cover_image, description, id, published_at } = blog;

  return (
    <div className="relative flex justify-start ">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 hover:border-secondary hover:rounded-lg hover:no-underline focus:no-underline dark:bg-gray-50 rounded-lg border-primary border-opacity-30"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded-lg h-44 dark:bg-gray-500"
          src={cover_image || placeHolder}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDeleteBlog(id)}
          className="absolute bg-primary p-2 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden -right-2 -top-8 mt-2"
        >
          <MdDeleteForever size={30} className="bg-primary rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default Blog;
