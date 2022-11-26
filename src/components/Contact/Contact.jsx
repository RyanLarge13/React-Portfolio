import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };
    await fetch(
      "https://react-portfolio-server-production-3097.up.railway.app/mailme/ryanlarge",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((url) => {
        console.log(url);
      });
  };

  return (
    <>
      <section className="contact">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
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
