import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import { jwtDecode } from 'jwt-decode';

export default function Header() {
	const user = useAuth();
	const navigate = useNavigate();

	const [roles, setRoles] = useState([]);

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
		<header
			className="flex w-[80%] justify-content-between align-items-center justify-self-center"
			style={{
				height: '100px',
				fontSize: '1em',
			}}
		>
			<div
				className="flex "
				style={{
					fontWeight: 700,
					fontSize: '1.75em',
					width: '30%',
				}}
			>
				SkyQuest
			</div>
			<div
				className="d-flex justify-content-around "
				style={{
					cursor: 'pointer',

					width: '40%',
				}}
			>
				<NavLink
					className="href p-1"
					//activeClassName="active"
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					//activeClassName="active"
					to="/flights"
					className="href p-1"
				>
					Flights
				</NavLink>
				<NavLink
					//activeClassName="active"
					to="/attractions"
					className="href p-1"
				>
					Attractions
				</NavLink>
				<NavLink to="/restaurants" className="href p-1">
					Restaurants
				</NavLink>
			</div>
			<div
				className=" d-flex justify-content-end "
				style={{
					width: '35%',
				}}
			>
				<div>
					{user && user.jwt ? (
						<>
							<span
								className="p-2 signinBtn"
								style={{
									borderRadius: 15,
									cursor: 'pointer',
									textAlign: 'center',
									marginLeft: 'auto',
								}}
								onClick={() => {
									if (roles?.find((role) => role === 'ADMIN'))
										navigate('/admin-dashboard');
									else if (
										roles?.find(
											(role) => role === 'MODERATOR'
										)
									)
										navigate('/mod-dashboard');
									else if (
										roles?.find((role) => role === 'USER')
									)
										navigate('/profile');
								}}
							>
								Dashboard
							</span>
						</>
					) : (
						<span
							className="p-2 signinBtn"
							style={{
								border: '3px solid white',
								borderRadius: 15,
								cursor: 'pointer',
								textAlign: 'center',
								marginLeft: 'auto',
							}}
							onClick={() => navigate('/login')}
						>
							Sign in
						</span>
					)}
				</div>
			</div>
		</header>
	);
}
