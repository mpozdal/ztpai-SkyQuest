import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';

import ResultsList from '../components/ResultsList';
function Flights() {
	return (
		<div className="background">
			<Header />
			<Filter />
			<div className="w-[80%] flex justify-content-center flex-col ">
				<ResultsList itemsPerPage={10} flight />
			</div>
		</div>
	);
}

export default Flights;
