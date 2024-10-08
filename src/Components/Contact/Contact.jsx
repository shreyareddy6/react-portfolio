import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import linekdin_icon from "../../assets/linkedin_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2a1c4883-f2a7-4df2-9c98-ee10dcc12c41");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Email sent successfully!", {
        className: "custom-success-toast",
        progressClassName: "custom-progress-bar",
        icon: "🎉",
      });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error(res.message || "There was an error submitting the form.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>y.s.g.shreya@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt="" />
              <a href="https://github.com/shreyareddy6" target="_blank">
                shreyareddy6
              </a>
            </div>
            <div className="contact-detail">
              <img src={linekdin_icon} alt="" />
              <a
                href="https://www.linkedin.com/in/shreyayerragudi/"
                target="_blank"
              >
                shreyayerragudi
              </a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>FL, United States</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
