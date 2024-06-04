import React from 'react';
import { FaStar } from 'react-icons/fa6';

function RestaurantResult({ data }) {
	return (
		<a href={data?.url} target="_blank" className={'href'}>
			<div
				className="position-relative h-[300px] md:h-[150px] bg-white/10 rounded-[50px] shadow-lg  flex  cursor-pointer transition 
            ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:scale-105 hover:bg-white/30"
			>
				<div className="w-[50px] h-100 bg-[#c94f42]  rounded-l-[50px] [writing-mode:vertical-rl] flex justify-content-center align-items-center">
					{data?.cusine.toUpperCase()} {data?.price}
				</div>
				<div className="rounded-[50px] pl-[10px] pt-[10px]">
					<img
						src={data?.imgUrl}
						className="w-[130px] h-[130px] rounded-[50px]"
						alt={data?.imgUrl}
					/>
				</div>
				<div className="overflow-hidden  p-3">
					<div className="flex flex-row align-items-center text-[#c94f42] font-bold text-xl text-uppercase">
						{data?.name}
					</div>
				</div>
				<div className=" position-absolute right-0 w-[50px] h-100 bg-[#c94f42] rounded-r-[50px] [writing-mode:vertical-lr] flex justify-content-center align-items-center">
					4,7&nbsp;
					<FaStar size="1.5rem" /> &nbsp;[3728]
				</div>
			</div>
		</a>
	);
}

export default RestaurantResult;
