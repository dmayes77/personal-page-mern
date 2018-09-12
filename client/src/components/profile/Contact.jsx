import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class ProfileContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let messageBody = `name: ${name}, email: ${email}, subject: ${subject}, message: ${message}`;
    console.log(messageBody);
  }

  render() {
    return (
      <section id="contact" className="section-gap bg-light">
        <div className="container">
          <div className="title text-center mx-5">
            <h1 className="mb-10">Hello</h1>
            <p>Hello</p>
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
                  type="submit"
                  className="badge-pill btn btn-info btn-block mt-20 p-1"
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
