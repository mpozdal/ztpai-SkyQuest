import React from 'react';
import { NavLink } from 'react-router-dom';

function Result({ item }) {
	return (
		<a href={item?.url} target="_blank" className={'href'}>
			<div
				className="position-relative h-[300px] md:h-[150px]  bg-white/10 rounded-[50px] shadow-lg  flex  cursor-pointer transition 
            ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-white/30"
			>
				<div className="rounded-[50px] pl-[10px] pt-[10px]">
					<img
						src={item?.imgUrl}
						className="w-[130px] h-[130px] rounded-[50px]"
						alt={item?.imgUrl}
					/>
				</div>
				<div className="overflow-hidden p-[15px] text-[#c94f42] font-bold text-xl text-uppercase">
					{item?.name}
				</div>
				<div className=" position-absolute right-0 w-[50px] h-100 bg-[#c94f42] rounded-r-[50px] [writing-mode:vertical-lr] flex justify-content-center align-items-center">
					{item?.category.toUpperCase()}
				</div>
			</div>
		</a>
	);
}

export default Result;
