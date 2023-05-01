import { useState, useEffect } from "react";
import { AiFillPlusCircle, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { motion } from "framer-motion";
import Developer from "../Developer/Developer.jsx";
import me from "../../../../assets/me.jpg";
import "./enterprise.scss";

const Enterprise = ({ onEnterpriseClick }) => {
  const [section, setSection] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {section ? (
        <>
          <section className="enterprise">
            <div className="title">
              <p>Enterprise</p>
            </div>
            <h2 className="major-heading about-me">About me</h2>
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
              className="pub-intro line-height"
            >
              Working in this industry has brought me amazing amounts of work
              ranging between programming in Web Development, all the way to the
              world of developing Desktop Applications! Then back again to the
              amazing React Native framework developing Mobile Apps, and with
              those wonderful subjects I have mastered various skills and
              produced amazing products with intriguing content!!
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="line-height"
            >
              My experience and strength lie in a strong understanding of
              MongoDB, Express, React, and Node.js. These are not my only
              powerful skills, but I love developing with them & I use them
              heavily when developing browser applications. But, I am also
              fluent in many other languages and frameworks, notably: CSS, HTML,
              Python, C++, React, React Native & Bash.
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
              className="line-height"
            >
              My techstack knowledge began in June 2022 after enrolling in
              CareerFoundry's Fullstack Web Development course. When it comes to
              web development, these are the tools I use to shine the brightest
              & what I spend most of my time learning and building my knowledge
              with to get a strong foot hold on efficiency & cleanliness in Web
              Development
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              className="line-height"
            >
              There is a multitude of reasons behind why I love this tech stack
              so much! Starting with MongoDB, I am a huge fan of non-relational
              databases. I believe the freedom they give to a developer is not
              only essential for the size of projects I find myself working on,
              but also easily compatable with Javascript which is a beneficial
              system when keeping your code readable, clean & effective! Node.js
              I love for the same reasons, the compatability with javascript
              makes this development tool an amazing and powerful system when
              used correctly for making extremely fast and modular servers.
              Express takes the value when your goal is to manipulate http
              requests and routing. I have yet to find a better framework with
              cleaner code. And of course React is my favorite framework for
              client side logic and user interface for no other reason but it's
              speed. This speed I speak of not only derives from within the
              browser itself as when state is manipulate, but also while writing
              large, or even medium sized applications. The number of SLOC is
              diminished by 3rds and your time is saved & preserved by thousands
              of minutes while still accomplishing even better, cleaner results
              than without React.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              className="line-height"
            >
              On a side note, I wanted to mention that in all honesty Next.js 13
              has out done React in many ways and I consider myself more to
              officially be a MENN stack developer. MongoDB, Express, Next &
              Node.js
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
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Professional
            </motion.h3>
            <motion.p
              className="ml line-height"
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
            >
              My professional history and environment consists of E-commerce
              builds for local business, managing databases and creating
              software for manufacturing industries. I also have professional
              experience developing mobile Android applications with the React
              Native framework & experience developing desktop applications,
              cli's with bash & I am beginning to dig my fingers into machine
              learning & Robotics with both Python and C++
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
              className="bg-white ml line-height personal"
            >
              Personal work and hobbies builds mostly take up my time in the
              form of Web Development at the forefront, Mobile Development as a
              way to change up my routine, and desktop application development
              using the Javascript framework Electron. My personal work ranges
              from building utility tools, E-commerce sites for my own
              businesses and family business, computer software, experimental
              scripting with bash and dabbling in robotics and machine learning
              with the popular starter kits by Arduino.
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
            <AiFillPlusCircle className="plus-icon" />
            <p>Enterprise</p>
          </div>
        </>
      )}
    </>
  );
};

export default Enterprise;
