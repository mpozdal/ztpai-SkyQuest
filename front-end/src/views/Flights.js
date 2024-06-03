import React, { useState } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';

import ResultsList from '../components/ResultsList';
function Flights() {
	const [items, setItems] = useState([]);
	return (
		<div className="background">
			<Header />
			<Filter items={items} setItems={setItems} />
			<div className="w-[80%] flex justify-content-center flex-col ">
				<ResultsList
					itemsPerPage={10}
					flight
					items={items}
					setItems={setItems}
				/>
			</div>
		</div>
	);
}

export default Flights;
