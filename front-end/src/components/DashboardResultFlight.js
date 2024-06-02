import React from 'react';
import { NavLink } from 'react-router-dom';
import { removeItem } from '../api/mutations';
import useAuth from '../hook/useAuth';
import { Button } from 'react-bootstrap';
function DashboardResultFlight({ data }) {
	const user = useAuth();
	return (
		<div className="position-relative h-[150px]  bg-white/10 rounded-[50px]   flex   justify-content-between m-[10px]">
			<div
				className=" p-[15px] text-[#c94f42] font-bold text-xl text-uppercase 
			 text-center flex justify-content-around align-items-center w-full"
			>
				<div className=" ">
					<div className="info">ID</div>
					<div className="data">{data?.id}</div>
				</div>
				<div className=" ">
					<div className="info">FLIGHT</div>
					<div className="data">
						{data?.depart} - {data?.arrive}
					</div>
				</div>

				<div className="">
					<div className="info">DATE</div>
					<div className="data">
						{new Date(data?.departureDate).toLocaleDateString()} -{' '}
						{new Date(data?.returnDate).toLocaleDateString()}
					</div>
				</div>
				<div className="">
					<div className="info">ACTION</div>
					<div className="data">
						<button
							className="p-1"
							onClick={() => console.log('info')}
						>
							INFO
						</button>
						<button
							className="p-1"
							onClick={() => console.log('edit')}
						>
							EDIT
						</button>
						<button
							className="p-1"
							onClick={() =>
								removeItem('flight', data?.id, user?.jwt)
							}
						>
							DELETE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardResultFlight;
