import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLoader } from "react-spinners";
import axios from "axios";
import "./Blog.scss";

const Blog = ({ onBlogClick }) => {
  const [blogs, setBlogs] = useState(false);
  const [blogIndex, setBlogIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [moveBlog, setMoveBlog] = useState(0);

  useEffect(() => {
    const productionUrl =
      "https://react-portfolio-server-production-3097.up.railway.app";
    axios.get(`${productionUrl}/dev/blogs`).then((res) => {
      setBlogs(res.data.blogData);
    });
  }, []);

  let diff = 75;

  const start = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const move = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const end = (e) => {
    if (touchEnd > touchStart - diff) {
      if (blogIndex === 1) return reset();
      setMoveBlog((prev) => prev + 100);
      setBlogIndex((prev) => prev - 1);
      return reset();
    }
    if (touchEnd < touchStart - diff) {
      if (blogIndex === blogs.length) return reset();
      setMoveBlog((prev) => prev - 100);
      setBlogIndex((prev) => prev + 1);
      return reset();
    }
  };

  const reset = () => {
    setTouchEnd(0);
    setTouchStart(0);
  };

  const translate = (index) => {
    setMoveBlog(index * -100);
    setBlogIndex(index + 1);
  };

  return (
    <>
      <h2 className="major-heading">Blog</h2>
      {blogs ? (
        <section
          className="blog-container"
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
        >
          {blogs.map((blog) => (
            <motion.div
              style={{ transform: `translateX(${moveBlog}%)` }}
              className="blog"
              key={blog._id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <img src={blog.ImageUrl} alt={`${blog.Title}`} />
              <h3>{blog.Title}</h3>
              <h2>{blog.Desc}</h2>
              <div className="story">
                <p dangerouslySetInnerHTML={{ __html: blog.Story }} />
              </div>
              <p className="date">{blog.Date}</p>
              <p className="author">- {blog.Author}</p>
              <button onClick={() => onBlogClick(blog)}>View More</button>
            </motion.div>
          ))}
          <div className="indicator">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={
                  blogIndex === index + 1 ? "indicator-dot-on" : "indicator-dot"
                }
                onClick={() => translate(index)}
              ></div>
            ))}
          </div>
        </section>
      ) : (
        <DotLoader className="loader" />
      )}
    </>
  );
};

export default Blog;
