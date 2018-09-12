import React, { Component, Fragment } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileSocial extends Component {
	render() {
		const { profile } = this.props;

		return (
			<Fragment>
				<section id="social"className="p-6 bg-info">
					<div className="text-center">
						{isEmpty(profile.social && profile.social.github) ? null : (
							<a
								className="text-white p-2"
								href={profile.social.github}
								target="_blank">
								<i className="fab fa-github fa-2x" />
							</a>
						)}

						{isEmpty(profile.social && profile.social.linkedin) ? null : (
							<a
								className="text-white p-2"
								href={profile.social.linkedin}
								target="_blank">
								<i className="fab fa-linkedin fa-2x" />
							</a>
						)}

						{isEmpty(profile.social && profile.social.facebook) ? null : (
							<a
								className="text-white p-2"
								href={profile.social.facebook}
								target="_blank">
								<i className="fab fa-facebook fa-2x" />
							</a>
						)}

						{isEmpty(profile.social && profile.social.youtube) ? null : (
							<a
								className="text-white p-2"
								href={profile.social.youtube}
								target="_blank">
								<i className="fab fa-youtube fa-2x" />
							</a>
						)}

						{isEmpty(profile.social && profile.social.instagram) ? null : (
							<a
								className="text-white p-2"
								href={profile.social.instagram}
								target="_blank">
								<i className="fab fa-instagram fa-2x" />
							</a>
						)}

						{isEmpty(profile.social && profile.social.twitter) ? null : (
							<a
								className="text-white p-2"
								href={profile.social.twitter}
								target="_blank">
								<i className="fab fa-twitter fa-2x" />
							</a>
						)}
					</div>
				</section>
			</Fragment>
		);
	}
}

export default ProfileSocial;
