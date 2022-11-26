import "./footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <p className="copyright">Copyright ©{date} <br/>All Right Reserved </p>
      </div>
      <div className="links">
        <ul>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
          <li>Social</li>
          <li>Email</li>
          <li>Tel</li>
        </ul>
      </div>
      <p className="name">Ryan Large</p>
    </>
  );
};

export default Footer;
