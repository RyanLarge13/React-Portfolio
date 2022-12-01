import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  const [sending, setSending] = useState(false);

  const checkName = (e) => {
    const array = name.split("");
    const conditions = ["<", ">", ";", "[", "]"];
    const check = conditions.some((letter) => array.includes(letter));
    check ? setInvalidName(true) : setInvalidName(false);
  };

  const checkEmail = (e) => {
    const array = email.split("");
    const conditions = ["<", ">", ";", "[", "]"];
    const check = conditions.some((letter) => array.includes(letter));
    check ? setInvalidEmail(true) : setInvalidEmail(false);
  };

  const checkMessage = (e) => {
    const array = message.split("");
    const conditions = ["<", ">", ";", "[", "]"];
    const check = conditions.some((letter) => array.includes(letter));
    check ? setInvalidMessage(true) : setInvalidMessage(false);
  };

  const notify = () =>
    toast.success(
      `Thank you ${name}, your message has been sent and I will contact you shortly.`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  const notifyErr = (message) => {
    toast.error(`Please ${message} the form before submission.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (invalidName || invalidEmail || invalidMessage)
      return notifyErr("correct");
    if (message === "" || email === "" || name === "")
      return notifyErr("complete");
    setSending(true);
    const productionUrl =
      "https://react-portfolio-server-production-3097.up.railway.app";
    const devUrl = "http://localhost:8080";
    const data = {
      name: name,
      email: email,
      message: message,
    };
    await fetch(`${productionUrl}/mailme/ryanlarge`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((url) => {
        console.log(url);
        setSending(false);
        setName("");
        setEmail("");
        setMessage("");
        notify();
      });
  };

  return (
    <>
      <section className="contact">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className={invalidName ? "invalid" : "input"}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={checkName}
          />
          <label htmlFor="email">Email</label>
          <input
            className={invalidEmail ? "invalid" : "input"}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={checkEmail}
          />
          <textarea
            className={invalidMessage ? "invalid" : "input"}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={checkMessage}
          >
            {message}
          </textarea>
          <button type="submit">{sending ? <SyncLoader /> : "Send"} </button>
        </form>
        <div className="email-me">
          <h2>Let's talk..</h2>
          <a href="mailto:ryanhudsonlarge13@gmail.com">ryanlarge@gmail.com</a>
        </div>
      </section>
    </>
  );
};

export default Contact;
