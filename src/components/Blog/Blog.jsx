import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLoader } from "react-spinners";
import axios from "axios";
import "./Blog.scss";

const Blog = ({ onBlogClick }) => {
  const [blogs, setBlogs] = useState(false);

  useEffect(() => {
    const devUrl = "http://localhost:8080";
    const productionUrl =
      "https://react-portfolio-server-production-3097.up.railway.app";
    axios.get(`${productionUrl}/dev/blogs`).then((res) => {
      setBlogs(res.data.blogData);
    });
  }, []);

  return (
    <>
      <h2 className="major-heading">Blog</h2>
      {blogs ? (
        <section className="blog-container">
          {blogs.map((blog) => (
            <motion.div className="blog" key={blog._id}>
              <img src={blog.ImageUrl} alt={`${blog.Title} image`} />
              <h3>{blog.Title}</h3>
              <h2>{blog.Desc}</h2>
              <div className="story">
                <p dangerouslySetInnerHTML={{ __html: blog.Story }} />
              </div>
              <p className="date">
                {blog.Date}
              </p>
              <p className="author">- {blog.Author}</p>
              <button onClick={() => onBlogClick(blog)}>View More</button>
            </motion.div>
          ))}
        </section>
      ) : (
        <DotLoader className="loader" />
      )}
    </>
  );
};

export default Blog;
