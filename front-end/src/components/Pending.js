import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalInfo from './ModalInfo';
import { removeItem, updateStatus } from '../api/mutations';
import useAuth from '../hook/useAuth';
function Pending() {
	const [pending, setPending] = useState([]);

	useEffect(() => {
		fetchFromQueue();
	}, []);

	async function fetchFromQueue() {
		try {
			await axios({
				url: 'http://localhost:8080/api/v1/restaurant-pending',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'get',
			}).then((response) => {
				setPending(response?.data);
				console.log(response);
			});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		pending.length > 0 &&
		pending.map((item) => <RestaurantResult data={item} />)
	);
}

export default Pending;

function RestaurantResult({ data }) {
	const user = useAuth();
	const [modal, setModal] = useState(false);
	console.log(data);
	return (
		<>
			<div className="w-100  ">
				<div className="position-relative h-[300px]  md:h-[150px]  bg-white/10 rounded-[50px]   flex   justify-content-between m-[10px]">
					{modal && <ModalInfo data={data} setModal={setModal} />}
					<div
						className=" p-[15px] text-[#c94f42] font-bold text-xl text-uppercase 
			 text-center flex justify-content-around align-items-center w-full flex-col md:flex-row"
					>
						<div className=" ">
							<div className="info">CATEGORY</div>
							<div className="data">RESTAURANT</div>
						</div>
						<div className=" ">
							<div className="info">USER</div>
							<div className="data">{data?.user?.email}</div>
						</div>

						<div className="">
							<div className="info">STATUS</div>
							<div className="data">{data.status}</div>
						</div>
						<div className="">
							<div className="info">ACTION</div>
							<div className="data">
								<button
									className="p-1"
									onClick={() => setModal(true)}
								>
									INFO
								</button>
								<button
									className="p-1"
									onClick={() => {
										updateStatus(data, data?.id, user?.jwt);
									}}
								>
									ACCEPT
								</button>
								<button
									className="p-1"
									onClick={() => {
										removeItem(
											'restaurant',
											data?.id,
											user?.jwt
										);
									}}
								>
									REMOVE
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
