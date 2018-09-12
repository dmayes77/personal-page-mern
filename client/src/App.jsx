import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/admin/Register';
import Login from './components/admin/Login';
// import Dashboard from './components/dashboard/Dashboard';
// import CreateProfile from './components/dashboardActions/CreateProfile';
// import EditProfile from './components/dashboardActions/EditProfile';
// import AddExperience from './components/dashboardActions/AddExperience';
// import AddEducation from './components/dashboardActions/AddEducation';
import Profile from './components/profile/Profile';

// // Check for token
// if (localStorage.jwtToken) {
// 	// Set auth token header auth
// 	setAuthToken(localStorage.jwtToken);
// 	// Decode token and get user info and exp
// 	const decoded = jwt_decode(localStorage.jwtToken);
// 	// Set user and isAuthenticated
// 	store.dispatch(setCurrentUser(decoded));

// 	// Check for expired token
// 	const currentTime = Date.now() / 1000;
// 	if (decoded.exp < currentTime) {
// 		// Logout user
// 		store.dispatch(logoutUser());
// 		// Clear current Profile
// 		store.dispatch(clearCurrentProfile());
// 		// Redirect to login
// 		window.location.href = '/login';
// 	}
// }

class App extends Component {
	render() {
		return (
				<Router>
					<div className="App">
						<Navbar />
						<Route exact path="/" component={Landing} />
						{/* <div className="container">
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/profile/dmayes" component={Profile} />
						</div> */}
						<Footer />
					</div>
				</Router>
		);
	}
}

export default App;
