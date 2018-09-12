import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.loginUser(userData);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		const { email, password, errors } = this.state;
		return (
			<div className="login service-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Log In</h1>
							<p className="lead text-center">Sign in to manage your account</p>
							<form noValidate onSubmit={e => this.onSubmit(e)}>
								<TextFieldGroup
									placeholder="Email Address"
									name="email"
									type="email"
									value={email}
									onChange={this.onChange}
									error={errors.email}
								/>
								<TextFieldGroup
									placeholder="Password"
									name="password"
									type="password"
									value={password}
									onChange={this.onChange}
									error={errors.password}
								/>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
