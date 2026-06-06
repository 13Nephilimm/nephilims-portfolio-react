import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_hhhcitj",
        "template_mwurkt4",
        form.current,
        "0NA3KLjIitEBGl6tV"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" data-aos="fade-up">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>jekokharabadze@gmail.com</h5>
            <a href="mailto:jekokharabadze@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>ჯეკო ხარაბაძე</h5>
            <a href="https://m.me/xarabadzejeko" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <AiOutlinePhone className="contact-option-icon" />
            <h4>Phone Number</h4>
            <h5>+995 599 1000 69</h5>
            <a href="tel:+995599100069">Call Me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="form-feedback success">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="form-feedback error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
