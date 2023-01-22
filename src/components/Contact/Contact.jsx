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
    const conditions = ["<", ">", ";", "[", "]", "(", ")", "/", "-"];
    const check = conditions.some((letter) => array.includes(letter));
    check ? setInvalidName(true) : setInvalidName(false);
  };

  const checkEmail = (e) => {
    const array = email.split("");
    const conditions = ["<", ">", ";", "[", "]", "(", ")", "/", "-"];
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
    toast.error(message, {
      position: "top-center",
      autoClose: 4500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (invalidName || invalidEmail || invalidMessage)
      return notifyErr(
        "Please correct the form below, do not include < > ; [ or ]"
      );
    if (message === "" || email === "" || name === "")
      return notifyErr(
        "You cannot send empty fields, please fill out the form"
      );
    if (message.length < 3 || email.length < 10 || name.length < 3)
      return notifyErr(
        "Name & message must be a minimum length of 3. Email must be 10"
      );
    setSending(true);
    sendMessage();
  };

  const sendMessage = async () => {
    const productionUrl =
      "https://react-portfolio-server-production-3097.up.railway.app";
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
            autofocus
            min="3"
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
            autocomplete="on"
            min="5"
          />
          <textarea
            className={invalidMessage ? "invalid" : "input"}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={checkMessage}
            value={message}
          >
            {message}
          </textarea>
          <button type="submit">{sending ? <SyncLoader /> : "Send"} </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
