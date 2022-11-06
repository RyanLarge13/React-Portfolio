import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import './social.scss'

const Social = () => {
  return (
    <>
      <h1>Social</h1>
      <div className="social-container">
        <BsGithub className="i" />
        <BsLinkedin className="i" />
        <BsTwitter className="i" />
        <BsFacebook className="i" />
        <BsInstagram className="i" />
      </div>
    </>
  );
};

export default Social;
