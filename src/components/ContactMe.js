import React from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w49lfqa",
        "website_template",
        e.target,
        "user_yv3eR3KhuLRqMru6OdzTB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <h2 className="text-center">Contact Me</h2>
      <div id="contactMe" className="container">
        <div className="container-fluid contact-form">
          <form onSubmit={sendEmail}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="name"
                name="name"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput3"
                placeholder="name@example.com"
                name="email"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Topic</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput4"
                placeholder="topic"
                name="topic"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Write a meesage</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
