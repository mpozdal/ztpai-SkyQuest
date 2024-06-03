import React from 'react';
import { NavLink } from 'react-router-dom';
function FlightResult({ data }) {
	console.log(data);
	return (
		//<NavLink to={'/flights/' + data.id} className={'href'}>
		<a href={data.url} className={'href'} target="__blank">
			<div
				className="position-relative h-[300px] md:h-[150px]  bg-white/10 rounded-[50px] shadow-lg  flex  cursor-pointer transition 
            ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-white/30 justify-content-between"
			>
				<div className="w-[150px] h-[150px] rounded-[50px] p-[10px]">
					<img
						src={`https://flagsapi.com/${data?.imgUrl}/flat/64.png`}
						className="w-[130px] h-[130px] rounded-[50px] object-fill"
						alt={data?.imgUrl}
					/>
				</div>
				<div
					className=" p-[15px] text-[#c94f42] font-bold text-xl text-uppercase 
			grid grid-cols-3 text-center flex justify-content-center align-items-between w-full"
				>
					<div className=" ">
						<div className="info">DEPART</div>
						<div className="data">{data?.depart}</div>
					</div>
					<div className=" ">
						<div className="info">ARRIVE</div>
						<div className="data">{data?.arrive}</div>
					</div>
					<div className="">
						<div className="info">DATE</div>
						<div className="data">
							{new Date(data?.departureDate).toLocaleDateString()}{' '}
							- {new Date(data?.returnDate).toLocaleDateString()}
						</div>
					</div>
					<div className=" ">
						<div className="info">STOPS</div>
						<div className="data">{data?.stops}</div>
					</div>
					<div className="">
						<div className="info">AIRLINES</div>
						<div className="data">{data?.airlines}</div>
					</div>
					<div className="">
						<div className="info">PRICE</div>
						<div className="data">{data?.price} €</div>
					</div>
				</div>
				<div className="  w-[50px] h-100 bg-[#c94f42] rounded-r-[50px] [writing-mode:vertical-lr] flex justify-content-center align-items-center">
					{data?.description}
				</div>
			</div>
		</a>
	);
}

export default FlightResult;
