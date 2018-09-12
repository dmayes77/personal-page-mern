import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileGithub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			count: 5,
			sort: 'created: asc',
			repos: []
		};
	}

	componentDidMount() {
		const { username } = this.props;
		const { count, sort, clientId, clientSecret } = this.state;

		fetch(
			`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
		)
			.then(res => res.json())
			.then(data => {
				if (this.refs.myRef) {
					this.setState({ repos: data });
				}
			})
			.catch(err => console.log(err));
	}

	render() {
		const { repos } = this.state;

		const repoItems = repos.map(repo => (
			<div
				key={repo.id}
				className="card card-body mb-3 shadow-sm p-3 rounded bg-light">
				<div className="row">
					<div className="col-md-6">
						<h5>
							<Link to={repo.html_url} className="text-info" target="_blank">
								{repo.name}
							</Link>
						</h5>
						<p>{repo.description}</p>
						{repo.homepage === null ? (
							''
						) : (
							<Link
								to={repo.homepage}
								className="text-black-50 small"
								target="_blank">
								Live Preview
								<i className="far fa-share-square ml-2" />
							</Link>
						)}
					</div>
					<div className="col-md-6">
						<span className="badge badge-info mr-1">
							Stars: {repo.stargazers_count}
						</span>
						<span className="badge badge-secondary mr-1">
							Watchers: {repo.watchers_count}
						</span>
						<span className="badge badge-success">
							Forks: {repo.forks_count}
						</span>
					</div>
				</div>
			</div>
		));
		return (
			<section ref="myRef" id="projects" className="section-gap">
				<div className="container">
					<h3 className="mb-4">Latest Github Repos</h3>
					{repoItems}
				</div>
			</section>
		);
	}
}

export default ProfileGithub;
