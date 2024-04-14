import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import FlightsViewer from '../components/FlightsViewer';
import { useParams } from 'react-router-dom';
function Flight() {
	const { id } = useParams();
	return (
		<div className="background">
			<Header />
			<div>id = {id}</div>
		</div>
	);
}

export default Flight;
