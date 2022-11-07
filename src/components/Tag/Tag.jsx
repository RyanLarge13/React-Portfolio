import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import "./tag.scss";

const Tag = ({ project, onCloseClick }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: [1.2, 0.9, 1.1, 1] }}
        className="tag-list"
      >
        <AiFillCloseCircle
          className="close"
          onClick={() => onCloseClick(false)}
        />
        <h3>{project.Title}</h3>
        <h4>Tags</h4>
        <ul>
          {project.Tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default Tag;
