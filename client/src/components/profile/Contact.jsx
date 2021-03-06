import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { sendContactEmail } from "../../services/contact";

class ProfileContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };

    this.clearForm = () => {
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    sendContactEmail(name, email, subject, message)
      .then(this.clearForm())
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section id="contact" className="section-gap bg">
          <blockquote className="blockquote text-center mb-5">
            <p className="mb-0">
            "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
            </p>
            <footer className="blockquote-footer">
            Patrick McKenzie <cite title="Source Title">Engineer / Blogger on Software Marketing</cite>
            </footer>
          </blockquote>
        <div className="container">
          <div className="title text-center mx-5">
            <h1 className="mb-10">If you need, Just drop me a line</h1>
            <p>I look forward to hearing from and working with you!</p>
          </div>
          <form
            onSubmit={e => this.onSubmit(e)}
            id="contact-form"
            method="post"
            className="mt-5"
          >
            <div className="row">
              <div className="col-md-6">
                <TextFieldGroup
                  placeholder="Enter your name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="Enter email address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="Enter your subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.onChange}
                />
                <div
                  id="sentAlert"
                  className="alert alert-success text-center collapse"
                >
                  Your message has been successfully sent!
                </div>
              </div>

              <div className="col-md-6">
                <TextAreaFieldGroup
                  placeholder="Message"
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  rows="6"
                />
                <button
                  id="btnSubmit"
                  type="submit"
                  className="badge-pill btn btn-info btn-block mt-20 shadow p-1"
                  href="#home"
                >
                  Send Message
                  <i className="fas fa-long-arrow-alt-right ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ProfileContact;
