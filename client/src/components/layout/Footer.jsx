import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
	return (
		<footer className="bg-dark text-light p-auto text-center mt-0">
			<ul className="navbar-nav">
				<li className="nav-item">
					<small className="nav-link">
						Copyright &copy; {new Date().getFullYear()} David Mayes<span className="mx-2">|</span>(470) 277-1818<span className="mx-2">|</span>dmayes77@gmail.com
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
