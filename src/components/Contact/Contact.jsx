import "./contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1>Contact</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
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
