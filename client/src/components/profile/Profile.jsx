import React, { Component } from 'react';
import Spinner from '../common/Spinner';
import ProfileAbout from './About';
import ProfileCreds from './Creds';
import ProfileGithub from './Github';
import ProfileContact from './Contact';

class Profile extends Component {
	render() {
		const { profile, loading } = this.props.profile;

		let profileContent;

		if (profile === null || loading) {
			profileContent = <Spinner />;
		} else {
			profileContent = (
				<div>
					<div className="row">
						<div className="col-md-12" />
					</div>
					{/* <ProfileAbout profile={profile} />
					<ProfileCreds
						education={profile.education}
						experience={profile.experience}
					/>
					{profile.githubusername ? (
						<ProfileGithub username={profile.githubusername} />
					) : null}
					<ProfileContact />
					<ProfileHeader profile={profile} /> */}
				</div>
			);
		}

		return (
			<section className="profile">
				<div className="row">
					<div className="col-md-12"></div>
				</div>
			</section>
		);
	}
}

export default Profile;
