import React from 'react';
import { NavLink } from 'react-router-dom';
function DashboardResultUsers({ data }) {
	console.log(data);
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
					<div className="info">USERNAME</div>
					<div className="data">{data?.username}</div>
				</div>

				<div className="">
					<div className="info">EMAIL</div>
					<div className="data">{data?.email}</div>
				</div>
				<div className="">
					<div className="info">ACTION</div>
					<div className="data">
						<span>INFO </span>
						<span>EDIT </span>
						<span>DELETE</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardResultUsers;
