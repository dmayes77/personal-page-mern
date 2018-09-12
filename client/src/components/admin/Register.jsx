import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		this.props.registerUser(newUser, this.props.history);
	}

	render() {
		const { name, email, password, password2, errors } = this.state;
		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Sign Up</h1>
							<p className="lead text-center">Create your account</p>
							<form noValidate onSubmit={e => this.onSubmit(e)}>
								<TextFieldGroup
									placeholder="Name"
									name="name"
									value={name}
									onChange={this.onChange}
									error={errors.name}
								/>
								<TextFieldGroup
									placeholder="Email"
									name="email"
									type="email"
									value={email}
									onChange={this.onChange}
									error={errors.email}
									info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
								/>
								<TextFieldGroup
									placeholder="Password"
									name="password"
									type="password"
									value={password}
									onChange={this.onChange}
									error={errors.password}
								/>
								<TextFieldGroup
									placeholder="Confirm Password"
									name="password2"
									type="password"
									value={password2}
									onChange={this.onChange}
									error={errors.password2}
								/>
								<input type="submit" className="btn btn-info btn-block mt-4" />
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;