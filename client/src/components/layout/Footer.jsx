import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
	return (
		<footer className="bg-dark text-light p-3 text-center">
			<ul className="navbar-nav">
				<li className="nav-item">
					<small className="nav-link">
						Copyright &copy; {new Date().getFullYear()} David Mayes
						{/* <Link className="text-light" to="/login">
							Admin
						</Link> */}
					</small>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
