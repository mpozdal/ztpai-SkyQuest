import React from 'react';
import Result from './Result';

import data from '../data';

function FlightsViewer() {
	return (
		<div className="w-[80%] flex justify-content-center mt-5">
			<div className="w-full flex flex-col gap-3">
				{data.map((elem) => (
					<Result />
				))}
			</div>
		</div>
	);
}

export default FlightsViewer;
