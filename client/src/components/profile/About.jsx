import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
	render() {
		const { profile, user, skills } = this.props;
		console.log(user.name)

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
							<div className="mb-3 p-3">
								<h3 className="text-center text-info">
									{user.name} Professional Statement
								</h3>
								<p className="text-center my-4">
									{isEmpty(profile.bio) ? (
										<span>{user.name} does not have a bio</span>
									) : (
										<span>{profile.bio}</span>
									)}
								</p>
								<hr />
								<div className="row">
									<div className="col-md-6 mt-2">
										<h3 className="text-center text-info">Skill Set</h3>
										<div className="row">
											<div className="d-flex flex-wrap justify-content-center align-items-center px-3">
												{skillsList}
											</div>
										</div>
									</div>
									<div className="col-md-6 mt-2">
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
													{/* <!--//level-bar-->                                  */}
												</div>
												{/* <!--//item--> */}

												<div className="item py-1">
													<div className="level-title">
														Javascript &amp; jQuery
													</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="95%" />
													</div>
													{/* <!--//level-bar-->                                  */}
												</div>
												{/* <!--//item--> */}

												<div className="item py-1">
													<div className="level-title">MongoDB</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="88%" />
													</div>
													{/* <!--//level-bar-->                                  */}
												</div>
												{/* <!--//item--> */}

												<div className="item py-1">
													<div className="level-title">HTML5 &amp; CSS</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="95%" />
													</div>
													{/* <!--//level-bar-->                                  */}
												</div>
												{/* <!--//item--> */}

												<div className="item py-1">
													<div className="level-title">NodeJS</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="92%" />
													</div>
													{/* <!--//level-bar-->                                  */}
												</div>
												{/* <!--//item--> */}

												<div className="item py-1">
													<div className="level-title">
														Illustrator &amp; Photoshop
													</div>
													<div className="level-bar">
														<div className="level-bar-inner" data-level="60%" />
													</div>
													{/* <!--//level-bar-->                                  */}
												</div>
												{/* <!--//item--> */}
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ProfileAbout;
