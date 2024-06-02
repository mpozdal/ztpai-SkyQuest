import Home from './views/Home';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flights from './views/Flights';
import Login from './views/Login';
import Register from './views/Register';
import Flight from './views/Flight';
import Attractions from './views/Attractions';
import Restaurants from './views/Restaurants';
import Profile from './views/Profile';
import { useEffect, useState } from 'react';
import useAuth from './hook/useAuth';
import { jwtDecode } from 'jwt-decode';
import PrivateRoute from './PrivateRoute';
import NotFound from './views/NotFound';
import AdminDashboard from './views/AdminDashboard';
import { Navigate } from 'react-router-dom';
import Unauthorized from './views/Unauthorized';
import UserDashboard from './views/UserDashboard';
function App() {
	const [roles, setRoles] = useState([]);
	const user = useAuth();

	useEffect(() => {
		getRolesFromJWT();
	}, [user]);

	function getRolesFromJWT() {
		if (user.jwt) {
			const decodedJwt = jwtDecode(user.jwt);
			console.log(decodedJwt);
			setRoles(decodedJwt.roles);
		}
	}
	return (
		<Router>
			<Routes>
				<Route path="/" exact={true} element={<Home />} />
				<Route path="/flights" exact={true} element={<Flights />} />
				<Route path="/flights/:id" exact={true} element={<Flight />} />
				<Route path="/not-found" exact={true} element={<NotFound />} />
				<Route
					path="/unauthorized"
					exact={true}
					element={<Unauthorized />}
				/>
				<Route
					path="/admin-dashboard"
					exact={true}
					element={
						roles?.find((role) => role === 'ADMIN') ? (
							<PrivateRoute>
								<AdminDashboard />
							</PrivateRoute>
						) : (
							<Navigate to="/unauthorized" />
						)
					}
				/>
				<Route
					path="/mod-dashboard"
					exact={true}
					element={
						roles?.find((role) => role === 'MODERATOR') ? (
							<PrivateRoute>
								<AdminDashboard />
							</PrivateRoute>
						) : (
							<Navigate to="/unauthorized" />
						)
					}
				/>
				<Route
					path="/attractions"
					exact={true}
					element={<Attractions />}
				/>

				<Route
					path="/profile"
					exact={true}
					element={
						<PrivateRoute>
							<UserDashboard />
						</PrivateRoute>
					}
				/>
				<Route
					path="/attractions/:id"
					exact={true}
					element={<Flight />}
				/>
				<Route
					path="/restaurants"
					exact={true}
					element={<Restaurants />}
				/>
				<Route
					path="/restaurants/:id"
					exact={true}
					element={<Flight />}
				/>
				<Route path="/login" exact={true} element={<Login />} />
				<Route path="/register" exact={true} element={<Register />} />
				<Route path="*" exact={true} element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
