import React from 'react';
import Header from '../components/Header';

function Unauthorized() {
	return (
		<div className="background">
			<Header />
			<div>401 ERROR</div>
		</div>
	);
}

export default Unauthorized;
