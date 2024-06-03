import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { removeItem } from '../api/mutations';
import useAuth from '../hook/useAuth';
import { Button } from 'react-bootstrap';
import ModalInfo from './ModalInfo';
function DashboardResult({ data, type }) {
	const user = useAuth();
	const [modal, setModal] = useState(false);
	return (
		<div className="position-relative h-[300px] md:h-[150px]  bg-white/10 rounded-[50px]   flex   justify-content-between m-[10px]">
			{modal && <ModalInfo data={data} type={type} setModal={setModal} />}
			<div
				className=" p-[15px] text-[#c94f42] font-bold text-xl text-uppercase 
			 text-center flex justify-content-around align-items-center w-full"
			>
				<div className=" ">
					<div className="info">ID</div>
					<div className="data">{data?.id}</div>
				</div>

				<div className="">
					<div className="info">ACTION</div>
					<div className="data">
						<button className="p-1" onClick={() => setModal(true)}>
							INFO
						</button>
						<button
							className="p-1"
							onClick={() => {
								console.log(type);
								removeItem(type, data?.id, user?.jwt);
							}}
						>
							REMOVE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardResult;
