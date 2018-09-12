import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/davidHeadshot.jpg";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    // const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="" onClick={e => this.onLogoutClick(e)} className="nav-link">
            <img
              className="rounded-circle"
              src={avatar}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            {/* <i className="fas fa-home mr-2" /> */}
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            {/* <i className="fas fa-user-tie mr-2" /> */}
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">
            {/* <i class="fas fa-briefcase mr-2" /> */}
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            {/* <i className="fas fa-laptop-code mr-2" /> */}
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            {/* <i className="far fa-file-alt mr-2" /> */}
            Contact
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-code mr-2" />
            David Mayes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  {/* <i className="fas fa-home mr-2" /> */}
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  {/* <i className="fas fa-user-tie mr-2" /> */}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  {/* <i class="fas fa-briefcase mr-2" /> */}
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  {/* <i className="fas fa-laptop-code mr-2" /> */}
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  {/* <i className="far fa-file-alt mr-2" /> */}
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
