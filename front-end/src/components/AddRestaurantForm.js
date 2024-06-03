import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hook/useAuth';
import Modal from '../components/Modal';
import FormInput from './FormInput';
import { jwtDecode } from 'jwt-decode';
function AddRestaurantForm() {
	const [city, setCity] = useState('');
	const [cusine, setCusine] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [name, setName] = useState('');

	const [price, setPrice] = useState('');
	const [url, setUrl] = useState('');

	const [modalVisible, setModalVisible] = useState(false);
	const [role, setRole] = useState();
	const user = useAuth();
	useEffect(() => {
		setRole(jwtDecode(user.jwt).roles[0]);

		const timer = setTimeout(() => {
			setModalVisible(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [modalVisible]);
	async function addRestaurant(e) {
		e.preventDefault();

		try {
			await axios({
				url:
					'http://localhost:8080/api/v1/user-get?email=' + user.email,
				headers: {
					Authorization: `Bearer ${user?.jwt}`,
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},

				method: 'post',
			}).then((response) => {
				console.log(response);
				const reqBody = {
					city: city,
					cusine: cusine,
					status: role === 'USER' ? 'IN_REVIEW' : 'ACCEPTED',
					description: 'lorem ipsum',
					img_url: image,
					name: name,
					price: price,
					url: url,
					user: response?.data,
				};
				axios({
					url: 'http://localhost:8080/api/v1/publish',
					headers: {
						Authorization: `Bearer ${user?.jwt}`,
						'Content-Type': 'application/json',
					},
					data: JSON.stringify(reqBody),
					method: 'post',
				}).then((response) => {
					console.log(response);
					setModalVisible(true);
				});
			});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			{modalVisible && <Modal />}

			<form
				className="grid grid-cols-2 gap-2 p-2 text-black flex align-items-center justify-content-end "
				onSubmit={(e) => addRestaurant(e)}
			>
				<FormInput
					data={{
						text: 'Name',
						value: name,
						onChange: setName,
						type: 'text',
					}}
				/>
				<FormInput
					data={{
						text: 'City',
						value: city,
						onChange: setCity,
						type: 'text',
					}}
				/>
				<FormInput
					data={{
						text: 'Cusine',
						value: cusine,
						onChange: setCusine,
						type: 'text',
					}}
				/>

				<FormInput
					data={{
						text: 'Price',
						value: price,
						onChange: setPrice,
						type: 'text',
					}}
				/>
				<FormInput
					data={{
						text: 'Url',
						value: url,
						onChange: setUrl,
						type: 'text',
					}}
				/>

				<FormInput
					data={{
						text: 'Image',
						value: image,
						onChange: setImage,
						type: 'text',
					}}
				/>
			</form>
			<button
				className="bg-[#c94f42] rounded-[50px] w-100 p-2"
				type="submit"
				onClick={(e) => addRestaurant(e)}
			>
				ADD
			</button>
		</>
	);
}

export default AddRestaurantForm;
