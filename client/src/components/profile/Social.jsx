import React, { Component, Fragment } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileSocial extends Component {
  render() {
    const { profile } = this.props;
    console.log(profile.social);

    return (
      <Fragment>
        <section id="social" className="p-3 bg-info">
          <div className="container">
            <h3 className="text-center text-white">
              Get in touch with me on social media
            </h3>
            <div className="d-flex justify-content-center pt-3">
              {isEmpty(profile.social && profile.social.github) ? null : (
                <a
                  className="text-white d-flex align-items-center"
                  href={profile.social.github}
                  target="_blank"
                >
                  <i className="fab fa-github fa-2x pr-5" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.linkedin) ? null : (
                <a
                  className="text-white d-flex align-items-center"
                  href={profile.social.linkedin}
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-2x pr-5 mr-2" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.facebook) ? null : (
                <a
                  className="text-white d-flex align-items-center"
                  href={profile.social.facebook}
                  target="_blank"
                >
                  <i className="fab fa-facebook fa-2x pr-5" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.youtube) ? null : (
                <a
                  className="text-white d-flex align-items-center"
                  href={profile.social.youtube}
                  target="_blank"
                >
                  <i className="fab fa-youtube fa-2x pr-5" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.instagram) ? null : (
                <a
                  className="text-white d-flex align-items-center"
                  href={profile.social.instagram}
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-2x pr-5" />
                </a>
              )}

              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <a
                  className="text-white d-flex align-items-center"
                  href={profile.social.twitter}
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-2x" />
                </a>
              )}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ProfileSocial;
