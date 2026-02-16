function Contact() {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          Contact Us
        </h2>

        <form className="contact-form mx-auto bg-white p-4 shadow rounded">
          <input
            className="form-control mb-3"
            placeholder="Your Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Message"
          ></textarea>

          <button className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
