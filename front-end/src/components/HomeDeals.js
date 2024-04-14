import React from 'react';
import Carusele from './Carusele';

function HomeDeals({ text }) {
	return (
		<div
			style={{
				background: '#99E2D9',
			}}
		>
			<Carusele text={text} />
		</div>
	);
}

export default HomeDeals;
