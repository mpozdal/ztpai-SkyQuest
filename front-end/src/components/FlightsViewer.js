import React from 'react';
import Card from './Card';

import data from '../data';

function FlightsViewer() {
	return (
		<div className="flex justify-content-center">
			<div className="grid grid-cols-4 auto-rows-fr p-3 w-3/4 gap-3">
				{data.map((elem) => (
					<Card data={elem} />
				))}
			</div>
		</div>
	);
}

export default FlightsViewer;
