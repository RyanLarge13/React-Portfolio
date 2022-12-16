import "./footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <p className="copyright">Copyright ©{date} <br/>All Right Reserved </p>
      </div>
      <p className="name">Ryan Large</p>
    </>
  );
};

export default Footer;
