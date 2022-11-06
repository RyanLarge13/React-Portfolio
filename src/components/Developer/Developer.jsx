import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./developer.scss";

const Developer = ({ onDevClick, onoroff }) => {
  const [sectionDev, setSectionDev] = useState(onoroff);
  return (
    <>
      {sectionDev ? (
        <>
          <section className="developer">
            <div className="title">
              <p>Developer</p>
            </div>
            <h1 className="major-heading">Projects</h1>
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
