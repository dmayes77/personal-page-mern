import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
	render() {
		const { profile, user, skills } = this.props;

		// Get first name
		// const firstName = user.name.trim().split(' ')[0];

		// Skill List
		const skillsList = skills.map((skill, index) => (
			<div key={index} className="p-2">
				<i className="fa fa-check text-info" /> {skill}
			</div>
		));

		return (
			<section id="about" className="service-area section-gap bg-white">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="mb-3 p-3 text-center">
								<h3 className="text-info mb-0">
									{user.name} Professional Statement
								</h3>
								<p>Current Location: {profile.location}</p>
								<p className="my-4">
									{isEmpty(profile.bio) ? (
										<span>{user.name} does not have a bio</span>
									) : (
										<span>{profile.bio}</span>
									)}
								</p>
								<hr />
								<div className="container">
									<div className="my-5">
										<h3 className="text-center text-info">Skill Set</h3>
										<div className="row">
											<div className="d-flex flex-wrap justify-content-center align-items-center px-3">
												{skillsList}
											</div>
										</div>
									</div>
									{/* <div className="col-md-6 mt-2">
										<section className="skills-section section">
											<h2 className="text-center text-info">
												<i className="fa fa-rocket mr-2" />
												Proficiency
											</h2>
											<div className="skillset px-3">
												<div className="item py-1">
													<div className="level-title">React &amp; Redux</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="80%" />
													</div>
												</div>

												<div className="item py-1">
													<div className="level-title">
														Javascript &amp; jQuery
													</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="95%" />
													</div>
												</div>

												<div className="item py-1">
													<div className="level-title">MongoDB</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="88%" />
													</div>
												</div>

												<div className="item py-1">
													<div className="level-title">HTML5 &amp; CSS</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="95%" />
													</div>
												</div>

												<div className="item py-1">
													<div className="level-title">NodeJS</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="92%" />
													</div>
												</div>

												<div className="item py-1">
													<div className="level-title">
														Illustrator &amp; Photoshop
													</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="60%" />
													</div>
												</div>
											</div>
										</section>
									</div> */}
								</div>
							</div>
						</div>
					</div>
					<blockquote className="blockquote text-center">
            <p className="mb-0">
						Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.
            </p>
            <footer className="blockquote-footer">
              Steve Jobs <cite title="Source Title">Programming Visionary</cite>
            </footer>
          </blockquote>
				</div>
			</section>
		);
	}
}

export default ProfileAbout;
