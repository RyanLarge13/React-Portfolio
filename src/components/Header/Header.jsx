import { AiOutlineCloudDownload } from "react-icons/ai";
import Axios from "axios";
import FileDownload from "js-file-download";
import "./header.scss";

const dlPdf = async (e) => {
  e.preventDefault();
  await Axios({
    url: "https://react-portfolio-server-production-3097.up.railway.app/pdf",
    method: "GET",
    responseType: "blob",
  }).then((res) => {
    FileDownload(res.data, "RyanLargesResume.pdf");
  });
};

const Header = () => {
  return (
    <>
      <header>
        <p className="logo">Ryan } /></p>
        <AiOutlineCloudDownload
          className="download"
          onClick={(e) => dlPdf(e)}
        />
      </header>
    </>
  );
};

export default Header;
