import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

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

  const handleSubmit = async (e) => {
    setSending(true);
    e.preventDefault();
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
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
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
