import React, { useEffect, useState } from 'react';
import AddRestaurantForm from './AddRestaurantForm';
import useAuth from '../hook/useAuth';
import axios from 'axios';
import DashboardResult from './DashboardResult';
function DashboardUserComponent({ option }) {
	const user = useAuth();
	const [pending, setPending] = useState([]);

	useEffect(() => {
		if (option === 'pending') fetchPending();
	}, [option]);

	async function fetchPending() {
		try {
			await axios({
				url: `http://localhost:8080/api/v1/restaurant-user?email=${user?.email}`,
				headers: {
					Authorization: `Bearer ${user?.jwt}`,
					'Content-Type': 'application/json',
				},

				method: 'post',
			}).then((response) => {
				setPending(response?.data);
				console.log(response?.data);
			});
		} catch (e) {
			console.log(e);
		}
	}

	if (option === 'restaurant-add')
		return (
			<div className="w-100">
				<AddRestaurantForm />;
			</div>
		);
	else
		return (
			<div className="w-100">
				{pending.length > 0 &&
					pending.map((item) => (
						<DashboardResult data={item} key={item.id} />
					))}
			</div>
		);
}

export default DashboardUserComponent;
