import React from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import placeHolder from "../../assets/404.jpg";
const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image, description, published_at, tags, body_html } =
    blog;
  //   console.log(blog.body_html);
  return (
    <div className="mx-auto group p-2 hover:no-underline focus:no-underline dark:bg-gray-50 rounded-lg border-gray-600 border-2 border-opacity-30">
      <img
        role="presentation"
        className="object-cover w-full rounded-lg h-44 dark:bg-gray-500"
        src={cover_image || placeHolder}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((tag, idx) => (
          <a
            key={idx}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">
          {new Date(published_at).toDateString()}
        </span>
      </div>

      <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
    </div>
  );
};

export default Content;
