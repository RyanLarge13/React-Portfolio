import "./BlogPost.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const BlogPost = ({ blogPost, removeBlog}) => {
  return (
    <>
      <section className="blog-post-section">
        <img src={blogPost.ImageUrl} alt={blogPost.Title} />
        <h1>{blogPost.Title}</h1>
        <h2>{blogPost.Desc}</h2>
        <p dangerouslySetInnerHTML={{ __html: blogPost.Story }} />
        <p className="author">Authored by {blogPost.Author}</p>
        <button className="close" onClick={() => removeBlog(false)}>
          Go Back
        </button>
      </section>
    </>
  );
};

export default BlogPost;
