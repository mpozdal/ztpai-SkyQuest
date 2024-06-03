import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import { jwtDecode } from 'jwt-decode';

export default function Header() {
	const user = useAuth();
	const navigate = useNavigate();

	const [roles, setRoles] = useState([]);
	const [menu, setMenu] = useState(false);

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
		<>
			{menu && <MobileMenu setMenu={setMenu} user={user} role={roles} />}
			<header
				className="flex w-[80%] justify-content-between align-items-center justify-self-center md:justify-content-center"
				style={{
					height: '100px',
					fontSize: '1em',
				}}
			>
				<div
					className="flex"
					style={{
						fontWeight: 700,
						fontSize: '1.75em',
						width: '30%',
					}}
				>
					SkyQuest
				</div>
				<div
					className="flex  md:hidden flex-col gap-1 cursor-pointer justify-items-end "
					onClick={() => setMenu(true)}
				>
					<div className="w-[30px] h-[4px] bg-white"></div>
					<div className="w-[30px] h-[4px] bg-white"></div>
					<div className="w-[30px] h-[4px] bg-white"></div>
				</div>
				<div
					className=" hidden md:flex justify-content-around "
					style={{
						cursor: 'pointer',

						width: '40%',
					}}
				>
					<NavLink
						className="href p-2"
						//activeClassName="active"
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						//activeClassName="active"
						to="/flights"
						className="href p-2"
					>
						Flights
					</NavLink>
					<NavLink
						//activeClassName="active"
						to="/attractions"
						className="href p-2"
					>
						Attractions
					</NavLink>
					<NavLink to="/restaurants" className="href p-2">
						Restaurants
					</NavLink>
				</div>
				<div
					className=" hidden md:flex justify-content-end "
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
										if (
											roles?.find(
												(role) => role === 'ADMIN'
											)
										)
											navigate('/admin-dashboard');
										else if (
											roles?.find(
												(role) => role === 'MODERATOR'
											)
										)
											navigate('/mod-dashboard');
										else if (
											roles?.find(
												(role) => role === 'USER'
											)
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
		</>
	);
}

function MobileMenu({ setMenu, user, role }) {
	const navigate = useNavigate();
	return (
		<div className="flex md:hidden w-100 h-[100vh] bg-[#c94f42] fixed z-50 flex-col justify-content-around align-items-center">
			<button
				className="absolute top-0 right-3 text-[3rem]"
				onClick={() => setMenu(false)}
			>
				X
			</button>
			<NavLink
				to="/"
				className="href mobileMenu "
				onClick={() => setMenu(false)}
			>
				HOME
			</NavLink>
			<NavLink
				to="/flights"
				className="href mobileMenu"
				onClick={() => setMenu(false)}
			>
				FLIGHTS
			</NavLink>
			<NavLink
				to="/restaurants"
				className="href mobileMenu"
				onClick={() => setMenu(false)}
			>
				RESTAURANTS
			</NavLink>
			<NavLink
				to="/attractions"
				className="href mobileMenu"
				onClick={() => setMenu(false)}
			>
				ATTRACTIONS
			</NavLink>

			{user && user.jwt ? (
				<>
					<span
						onClick={() => {
							setMenu(false);
							if (role?.find((role) => role === 'ADMIN'))
								navigate('/admin-dashboard');
							else if (role?.find((role) => role === 'MODERATOR'))
								navigate('/mod-dashboard');
							else if (role?.find((role) => role === 'USER'))
								navigate('/profile');
						}}
					>
						Dashboard
					</span>
				</>
			) : (
				<span
					onClick={() => {
						setMenu(false);
						navigate('/login');
					}}
				>
					Sign in
				</span>
			)}
		</div>
	);
}
