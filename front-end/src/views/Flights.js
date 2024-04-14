import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import FlightsViewer from '../components/FlightsViewer';
function Flights() {
	return (
		<div className="background">
			<Header />
			<Filter />
			<FlightsViewer />
		</div>
	);
}

export default Flights;
