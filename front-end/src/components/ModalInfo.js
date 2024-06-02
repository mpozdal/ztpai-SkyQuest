import React from 'react';

function ModalInfo({ data, type, setModal }) {
	return (
		<div
			className="absolute h-[150px] w-100 bg-white text-black rounded-[50px]   flex  justify-content-center align-items-center"
			onClick={() => setModal(false)}
		>
			{JSON.stringify(data, null, 2)}
		</div>
	);
}

export default ModalInfo;