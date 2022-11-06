import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillPlusCircle, AiFillTags } from "react-icons/ai";
import { motion } from "framer-motion";
import { DotLoader } from "react-spinners";
import Tag from "../Tag/Tag.jsx";
import githubProfile from "../../assets/githubprofile.jpg";
import code from "../../assets/code.jpg";
import "./developer.scss";

const Developer = ({ onDevClick, onoroff }) => {
  let tags;
  const [projects, setProjects] = useState([]);
  const [sectionDev, setSectionDev] = useState(onoroff);
  const [tag, setTag] = useState(false);

  const getTags = (project) => {
    tags = project;
    setTag(true);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/dev/projects").then((res) => {
      setProjects(res.data.data);
    });
  }, [projects]);

  return (
    <>
      {sectionDev ? (
        <>
          <section className="developer">
            <div className="title">
              <p>Developer</p>
            </div>
          </section>
          <h1 className="major-heading">Projects</h1>
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
          <section className="project-container">
            {projects.length > 0 ? (
              <div className="project-grid">
                {projects.map((project) => (
                  <div className="project">
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
                      onClick={() => getTags(project)}
                    />
                  </div>
                ))}
                {tag ? <Tag tag={tags} /> : ""}
              </div>
            ) : (
              <>
                <DotLoader className="loader" />
                <h1>No projects to show</h1>
              </>
            )}
          </section>
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
            <AiFillPlusCircle />
            <p>Developer</p>
          </div>
        </>
      )}
    </>
  );
};

export default Developer;
