import Footer from "../Footer/Footer";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import "./social.scss";

const Social = () => {
  return (
    <>
      <h1 className="social-heading">Social</h1>
      <div className="social-container">
        <a href="https://github.com/RyanLarge13/">
          <BsGithub className="i" />
        </a>
        <a href="https://www.linkedin.com/in/ryan-large">
          <BsLinkedin className="i" />
        </a>
        <a href="https://twitter.com/ryan_large13?t=_NZ-7J0bK6XSMcB6_YuVcA&s=09">
          <BsTwitter className="i" />
        </a>
        <a href="https://m.facebook.com/ryan.large.984?eav=AfYH83adkFpRXg0-y-FiIcOPmv1iA81j18BBgGeBY2P75b291GOosEKXGPi8r20P9-4&paipv=0">
          <BsFacebook className="i" />
        </a>
        <a href="https://Instagram.com/ryanlarge13">
          <BsInstagram className="i" />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Social;
