import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
	return (
		<header
			className="d-flex w-100  fluid justify-content-between align-items-center"
			style={{
				height: '100px',
				fontSize: '1em',
			}}
		>
			<div
				className="flex justify-content-center"
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
				<NavLink className="href" exact activeClassName="active" to="/">
					Home
				</NavLink>
				<NavLink
					exact
					activeClassName="active"
					to="/flights"
					className="href"
				>
					Flights
				</NavLink>
				<NavLink
					exact
					activeClassName="active"
					to="/attractions"
					className="href"
				>
					Attractions
				</NavLink>
				<NavLink
					exact
					activeClassName="active"
					to="/restaurants"
					className="href"
				>
					Restaurants
				</NavLink>
			</div>
			<div
				className=" d-flex justify-content-center "
				style={{
					width: '35%',
				}}
			>
				<NavLink to="/login" className="href ">
					<div
						className="p-2 signinBtn"
						style={{
							border: '3px solid white',
							borderRadius: 15,

							textAlign: 'center',
							marginLeft: 'auto',
						}}
					>
						Sign in
					</div>
				</NavLink>
			</div>
		</header>
	);
}
