import React from 'react';

export default function Title() {
	return (
		<div
			style={{
				fontWeight: 900,
				lineHeight: '4rem',
				textShadow: '0px 0px 10px rgba(0, 0, 0, .2)',
				position: 'absolute',
				textAlign: 'center',
				marginLeft: 'auto',
				marginRight: 'auto',
				right: '10%',
				top: '50%',
				transform: 'translate(0%,-50%)',
				display: 'flex',
				flexDirection: 'column',
				justifyItems: 'center',
				alignItems: 'center',
				scrollSnapAlign: 'center',
			}}
		>
			<div
				style={{
					fontSize: '3rem',
				}}
			>
				TRAVELLING AROUND
			</div>
			<div
				style={{
					fontSize: '5rem',
				}}
			>
				THE&nbsp;WORLD
			</div>
			<div
				style={{
					fontSize: '3.1rem',
				}}
			>
				HAS &nbsp; NEVER &nbsp; BEEN
			</div>
			<div
				style={{
					fontSize: '6.5rem',
				}}
			>
				SO&nbsp;EASY
			</div>
			<a href="#desc" className="href">
				<div className="landing-page-button hover:scale-105">
					START EXPLORING
				</div>
			</a>
		</div>
	);
}
