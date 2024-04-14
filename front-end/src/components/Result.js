import React from 'react';

function Result() {
	return (
		<div
			className="position-relative h-[200px]  bg-white/10 rounded-[50px] shadow-lg  flex  cursor-pointer transition 
            ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-white/30"
		>
			<div className=" rounded-[50px] pl-[15px] pt-[15px]">
				<img
					src={'/assets/city.jpeg'}
					className="w-[170px] h-[170px] rounded-[50px]"
				/>
			</div>
			<div className="overflow-hidden p-[15px] text-[#c94f42] font-bold text-xl text-uppercase">
				Empire state building
			</div>
			<div className=" position-absolute right-0 w-[50px] h-100 bg-[#c94f42] rounded-r-[50px] [writing-mode:vertical-lr] flex justify-content-center align-items-center">
				MUSEUM
			</div>
		</div>
	);
}

export default Result;
