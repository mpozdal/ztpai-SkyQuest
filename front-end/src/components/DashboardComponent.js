import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hook/useAuth';
import AddForm from './AddForm';
import AddRestaurantForm from './AddRestaurantForm';
import AddAttractionForm from './AddAttractionForm';
import Pending from './Pending';
import DashboardResult from './DashboardResult';
import isValidJwt from '../api/validate';
function DashboardComponent({ option, setOption, userID }) {
	const user = useAuth();
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems([]);
		if (option === 'flight') fetchData(option);
		else if (option === 'restaurant') fetchData('restaurant-confirmed');
		else if (option === 'user') fetchUsers();
		else if (option === 'attraction') fetchData(option);
	}, [option]);

	async function fetchUsers() {
		try {
			await axios({
				url: 'http://localhost:8080/api/v1/user',
				headers: {
					Authorization: `Bearer ${user?.jwt}`,
					'Content-Type': 'application/json',
				},
				method: 'get',
			}).then((response) => {
				setItems(response?.data);
				console.log(response?.data);
			});
		} catch (e) {
			console.log(e);
		}
	}
	async function fetchData(option) {
		try {
			const url = 'http://localhost:8080/api/v1/' + option;

			await axios({
				url: url,
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'get',
			}).then((response) => {
				setItems(response?.data);
			});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className="w-[100%]">
			<button
				onClick={() => {
					setItems([]);
					if (option === 'flight') fetchData(option);
					else if (option === 'restaurant')
						fetchData('restaurant-confirmed');
					else if (option === 'user') fetchUsers();
					else if (option === 'attraction') fetchData(option);
				}}
				className="bg-[#c94f42] p-2 rounded-[25px]"
			>
				Refresh
			</button>
			{items.length > 0 && option === 'flight' ? (
				items.map((item) => (
					<DashboardResult type="flight" data={item} />
				))
			) : (
				<div></div>
			)}
			{items.length > 0 && option === 'attraction' ? (
				items.map((item) => (
					<DashboardResult type="attraction" data={item} />
				))
			) : (
				<div></div>
			)}
			{items.length > 0 && option === 'restaurant' ? (
				items.map((item) => (
					<DashboardResult type="restaurant" data={item} />
				))
			) : (
				<div></div>
			)}
			{items.length > 0 && option === 'user' ? (
				items.map((item) => <DashboardResult type="user" data={item} />)
			) : (
				<div></div>
			)}

			{option === 'add-flight' && <AddForm />}
			{option === 'pending' && <Pending />}
			{option === 'add-restaurant' && <AddRestaurantForm />}
			{option === 'add-attraction' && <AddAttractionForm />}
		</div>
	);
}

export default DashboardComponent;
