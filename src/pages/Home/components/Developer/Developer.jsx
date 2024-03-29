import { useState, useEffect } from "react";
import { AiFillPlusCircle, AiFillTags } from "react-icons/ai";
import { motion } from "framer-motion";
import { DotLoader } from "react-spinners";
import axios from "axios";
import Tag from "../Tag/Tag";
import Blog from "../Blog/Blog";
import BlogPost from "../BlogPost/BlogPost.jsx";
import githubProfile from "../../../../assets/githubprofile.jpg";
import code from "../../../../assets/code.jpg";
import "./developer.scss";

const Developer = ({ onDevClick, onoroff }) => {
  const [projects, setProjects] = useState([]);
  const [sectionDev, setSectionDev] = useState(onoroff);
  const [tags, setTags] = useState(false);
  const [singleProject, setSingleProject] = useState([]);
  const [post, setPost] = useState(false);
  const [page, setPage] = useState(0);
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(false);

  useEffect(() => {
    const productionUrl = `https://react-portfolio-server-production-3097.up.railway.app/`;

    axios
      .get(`${productionUrl}dev/projects/${page}`)
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    checkPage();
  });

  const checkPage = () => {
    page > 0 ? setPrevious(true) : setPrevious(false);
    projects.length < 6 ? setNext(false) : setNext(true);
  };

  return (
    <>
      {sectionDev ? (
        <>
          <section className={post ? "developer.open" : "developer"}>
            <div className="title">
              <p>Developer</p>
            </div>
          </section>
          <div className="dev-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              whileInView={{ opacity: 1 }}
              src={githubProfile}
              alt="y github profile"
              className="git-img"
            />
            <motion.img
              initial={{ opacity: 0 }}
              transition={{ delay: 0.25 }}
              whileInView={{ opacity: 1 }}
              src={code}
              alt="Github profile code"
              className="code-img"
            />
          </div>
          <h2 className="major-heading project-title">Projects</h2>
          <section className="project-container">
            {projects.length > 0 ? (
              <>
                <div className="project-grid">
                  {projects.map((project) => (
                    <div className="project" key={project._id}>
                      <a href={project.Link} target="_blank" rel="noreferrer">
                        <motion.h2 initial={{ y: 50 }} whileInView={{ y: 0 }}>
                          {project.Title}
                        </motion.h2>
                      </a>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {project.Description}
                      </motion.p>
                      <a className="code-link" href={project.CodeLink}>
                        {project.CodeLink}
                      </a>
                      <AiFillTags
                        className="tags"
                        onClick={() => {
                          setTags(true);
                          setSingleProject(project);
                        }}
                      />
                    </div>
                  ))}
                  {tags && (
                    <Tag
                      project={singleProject}
                      onCloseClick={(bool) => setTags(bool)}
                    />
                  )}
                </div>
                <div className="paginate-btns">
                  {previous ? (
                    <button onClick={() => setPage((prev) => prev - 1)}>
                      Prev
                    </button>
                  ) : (
                    <button className="no-touch">Prev</button>
                  )}
                  <p>{page + 1}</p>
                  {next ? (
                    <button onClick={() => setPage((prev) => prev + 1)}>
                      Next
                    </button>
                  ) : (
                    <button className="no-touch">Next</button>
                  )}
                </div>
              </>
            ) : (
              <>
                <DotLoader className="loader" />
                <h1>No projects to show</h1>
              </>
            )}
          </section>
          {post ? (
            <BlogPost blogPost={post} removeBlog={(bool) => setPost(bool)} />
          ) : (
            <Blog onBlogClick={(singlePost) => setPost(singlePost)} />
          )}
        </>
      ) : (
        <>
          <div
            className="info"
            onClick={() => {
              setSectionDev(true);
              onDevClick(false);
            }}
          >
            <AiFillPlusCircle className="plus-icon" />
            <p>Developer</p>
          </div>
        </>
      )}
    </>
  );
};

export default Developer;
