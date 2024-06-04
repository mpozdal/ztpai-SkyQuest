import React from 'react';
import { NavLink } from 'react-router-dom';

function Card({ data }) {
	return (
		<a href={data?.url} className={'href'} target="_blank">
			<div className="h-[450px]  w-80 m-auto bg-white rounded-[50px] deal hover:scale-95 transition ease-in-out  ">
				<div className=" rounded-[50px] p-2">
					<img className="rounded-[50px]" src="/assets/city.jpeg" />
				</div>
				<div className="flex h-50 p-3 flex flex-row flex-wrap">
					<div className="w-50 ">
						<div className="info">DEPART</div>
						<div className="data">{data?.depart.toUpperCase()}</div>
					</div>
					<div className="w-50 text-end">
						<div className="info">ARRIVE</div>
						<div className="data">{data?.arrive.toUpperCase()}</div>
					</div>
					<div className="w-50">
						<div className="info">DATE</div>
						<div className="data">
							{new Date(data?.departureDate).toLocaleDateString()}{' '}
							- {new Date(data?.returnDate).toLocaleDateString()}
						</div>
					</div>
					<div className="w-50 text-end">
						<div className="info">STOPS</div>
						<div className="data">{data?.stops}</div>
					</div>
					<div className="w-50">
						<div className="info">AIRLINES</div>
						<div className="data">
							{data?.airlines.toUpperCase()}
						</div>
					</div>
					<div className="w-50 text-end">
						<div className="info">PRICE</div>
						<div className="data">{data?.price} €</div>
					</div>
				</div>
			</div>
		</a>
	);
}

export default Card;
