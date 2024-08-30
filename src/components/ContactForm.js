import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ex2059k";
    const templateID = "template_i1hg1he";
    const userID = "D6RAB1uqhy6wJu3yd";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "CSE-B",
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response);
        alert("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
      },
      (err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div
      className="p-5 text-white d-flex justify-content-center "
      style={{ backgroundColor: "black" }}
    >
      <form
        onSubmit={handleSubmit}
        className="contact-form block"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2 style={{ fontFamily: "monospace", letterSpacing: "1px" }}>
          Feedback Form
        </h2>

        <div>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{
              border: "none",
              height: "80px",
              borderRadius: "20px",
              width: "235px",
              paddingLeft: "10px",
              paddingTop: "5px",
            }}
          />
        </div>
        <button type="submit " className="btn form-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
