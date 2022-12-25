import { useEffect } from "react";
import "./BlogPost.scss";

const BlogPost = ({ blogPost, removeBlog }) => {
	
  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, []);
  
  return (
    <>
      <section className="blog-post-section">
        <img src={blogPost.ImageUrl} alt={blogPost.Title} />
        <h1>{blogPost.Title}</h1>
        <h2>{blogPost.Desc}</h2>
        <p
          className="story"
          dangerouslySetInnerHTML={{ __html: blogPost.Story }}
        />
        <p className="author">Authored by - {blogPost.Author}</p>
        <button className="close" onClick={() => removeBlog(false)}>
          Go Back
        </button>
      </section>
    </>
  );
};

export default BlogPost;
