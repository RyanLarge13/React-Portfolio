import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import "./tag.scss";

const Tag = ({ project }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: [1.2, 0.9, 1.1, 1] }}
        className="tag-list"
      >
        <AiFillCloseCircle className="close" />
        <p>{project}</p>
      </motion.div>
    </>
  );
};

export default Tag;
