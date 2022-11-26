import { useState } from "react";
import { AiFillPlusCircle, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { motion } from "framer-motion";
import Developer from "../Developer/Developer.jsx";
import me from "../../assets/me.jpg";
import "./enterprise.scss";

const Enterprise = ({ onEnterpriseClick }) => {
  const [section, setSection] = useState(true);
  return (
    <>
      {section ? (
        <>
          <section className="enterprise">
            <div className="title" /*onClick={() => setSection(false)}*/>
              <p>Enterprise</p>
            </div>
            <h2 className="major-heading">About me</h2>
            <motion.img
              transition={{ delay: 0.2 }}
              whileInView={{ opacity: 1 }}
              src={me}
              alt="me"
              className="me"
            />
          </section>
          <section className="publications">
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Meet Ryan
            </motion.h3>
            <motion.p
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="pub-intro"
            >
              Working in this industry has brought various amounts of work,
              ranging between programming to web development and with those
              wonderful subjects I have mastered various skills and produced
              amazing products with intriguing content.
            </motion.p>
            <motion.p whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              My experience and strength lie in a strong understanding of
              Mongodb, Express, React, and Node.js. These are not my only
              powerful skills. I also am fluent in many other languages such as
              CSS, HTML, Python, C++ and more, including a large amount of
              Javascript libraries & frameworks.
            </motion.p>
          </section>
          <h2 className="major-heading">Skills</h2>
          <section className="skills">
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Tech Stack
            </motion.h3>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
            >
              My techstack knowledge began in June 2022 while enrolling in
              CareerFoundry's Fullstack Web Development course. When it comes to
              web development, these are the tools I use to shine the brightest.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
            >
              MongoDB CLI, Atlas, Compass and mongoose have all been implemented
              throughout various projects with advanced logic and queries.
              Express is the only framework I will use on personal projects as
              it is the most effective, efficient and extremely modular. React
              was born and so was the SPA. Every large project I create in Web
              Development I use React as it is my #1 clientside framework.
              Node.js is used in every single React project, any project that
              requires me to set up a database, and run a fast modular server.
            </motion.p>
            <div className="social">
              <a href="https://twitter.com/ryan_large13?t=_NZ-7J0bK6XSMcB6_YuVcA&s=09">
                <AiFillTwitterCircle />
              </a>
              <a href="https://m.facebook.com/ryan.large.984?eav=AfYH83adkFpRXg0-y-FiIcOPmv1iA81j18BBgGeBY2P75b291GOosEKXGPi8r20P9-4&paipv=0">
                <BsFacebook />
              </a>
            </div>
          </section>
          <h2 className="major-heading">Experience</h2>
          <section className="experience">
            {" "}
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Professional
            </motion.h3>
            <motion.p
              className="ml"
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
            >
              My professional history and environment consists of E-commerce
              builds for local business, managing databases, and creating
              software for manufacturing industries.
            </motion.p>
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Personal
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              className="bg-white ml"
            >
              Personal work, and hobbiest builds are prioritized with web and
              mobile development ranging from utility tools, E-commerce sites
              for my own businesses and family business, advertisment, software,
              and experimental scripting with bash.
            </motion.p>
            <Developer onDevClick={(bool) => setSection(bool)} />
          </section>
        </>
      ) : (
        <>
          <Developer onoroff={true} />
          <div
            className="info"
            onClick={() => {
              setSection(true);
            }}
          >
            <AiFillPlusCircle />
            <p>Enterprise</p>
          </div>
        </>
      )}
    </>
  );
};

export default Enterprise;
