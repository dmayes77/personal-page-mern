import React, { Component, Fragment } from "react";
import { Switch } from "react-router-dom";
import ProfileAbout from "../profile/About";
import ProfileCreds from "../profile/Creds";
import ProfileGithub from "../profile/Github";
import ProfileContact from "../profile/Contact";
import ProfileSocial from "../profile/Social";
import ThankYou from "../profile/ThankYou";
import { getByHandle } from '../../services/profile';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      user: {},
      skills: [],
      experience: [],
      education: []
    };
  }

  componentDidMount() {
    getByHandle('dmayes').then(profile =>
      this.setState({
        profile,
        user: profile.user,
        skills: profile.skills,
        experience: profile.experience,
        education: profile.education
      })
    );
  }

  render() {
    const { profile, user, skills, experience, education } = this.state;
    return (
      <Fragment>
        <section className="landing" id="home">
          <div className="dark-overlay landing-inner text-light">
            <div className="container landing-inner">
              <div className="row mb-3">
                <div className="col-md-12 text-center">
                  <img
                    className="mb-4 img-fluid rounded-circle"
                    src={user.avatar}
                    alt="default_avatar"
                  />
                  <h4>A Brief Introduction</h4>
                  <p>
                    My Name is David Mayes. Please browse around my website to
                    view my profile. I am eager to engage in new and exciting
                    projects and if you would like to build something together
                    please get in touch.
                  </p>
                </div>
              </div>
              <p className="text-center">
                This website was built with the following technologies:
              </p>
              <div className="row justify-content-center devicon">
                <div className="mr-4 mb-3">
                  <i className="devicon-mongodb-plain-wordmark" />
                </div>
                <div className="mr-4 mb-3">
                  <i className="devicon-express-original" />
                </div>
                <div className="mr-4 mb-3">
                  <i className="devicon-react-original-wordmark" />
                </div>
                <div className="mr-4 mb-3">
                  <i className="devicon-nodejs-plain" />
                </div>
                <div className="mr-4 mb-3">
                  <i className="devicon-html5-plain-wordmark" />
                </div>
                <div className="mr-4 mb-3">
                  <i className="devicon-visualstudio-plain" />
                </div>
                <div className="mr-4 mb-3">
                  <i className="devicon-heroku-original-wordmark" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProfileAbout profile={profile} user={user} skills={skills} />
        <ProfileCreds education={education} experience={experience} />
        {profile.githubusername ? (
          <ProfileGithub username={profile.githubusername} />
        ) : null}
        <ProfileContact />
        <ProfileSocial profile={profile} />
      </Fragment>
    );
  }
}

export default Landing;
