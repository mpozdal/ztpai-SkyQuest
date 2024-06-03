import { set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hook/useAuth';
import Modal from '../components/Modal';
import FormInput from './FormInput';
import Select from 'react-select';
import { format, parseISO } from 'date-fns';

function AddForm() {
	const [departureDate, setDepartureDate] = useState('');
	const [returnDate, setReturnDate] = useState('');
	const [depart, setDepart] = useState('');
	const [arrive, setArrive] = useState('');
	const [price, setPrice] = useState('');
	const [stops, setStops] = useState('');
	const [image, setImage] = useState('');
	const [desc, setDesc] = useState('');
	const [airlines, setAirlines] = useState('');
	const [url, setUrl] = useState('');
	const [modalVisible, setModalVisible] = useState(false);

	const user = useAuth();
	useEffect(() => {
		const timer = setTimeout(() => {
			setModalVisible(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [modalVisible]);
	async function addFlight(e) {
		e.preventDefault();

		const reqBody = {
			arrive: arrive,
			depart: depart,
			departureDate: Date.parse(departureDate),
			description: desc,
			imgUrl: image,
			return_date: Date.parse(returnDate),
			stops: stops,
			url: url,
			airlines: airlines,
			price: price,
		};

		try {
			await axios({
				url: 'http://localhost:8080/api/v1/flight',
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
		} catch (e) {
			console.log(e);
		}
		setArrive('');
		setDepart('');
		setDepartureDate('');
		setImage('');
		setReturnDate('');
		setStops('');
		setUrl('');
		setAirlines('');
		setPrice('');
	}

	return (
		<>
			{modalVisible && <Modal />}

			<form
				className="grid grid-cols-2 gap-2 p-2 text-black flex align-items-center justify-content-end "
				onSubmit={(e) => addFlight(e)}
			>
				<FormInput
					data={{
						text: 'Date',
						value: departureDate,
						onChange: setDepartureDate,
						type: 'date',
					}}
				/>
				<FormInput
					data={{
						text: 'ReturnDate',
						value: returnDate,
						onChange: setReturnDate,
						type: 'date',
					}}
				/>
				<FormInput
					data={{
						text: 'Depart',
						value: depart,
						onChange: setDepart,
						type: 'text',
					}}
				/>

				<FormInput
					data={{
						text: 'Arrive',
						value: arrive,
						onChange: setArrive,
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
						text: 'Stops',
						value: stops,
						onChange: setStops,
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
				<FormInput
					data={{
						text: 'Description',
						value: desc,
						onChange: setDesc,
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
						text: 'Airlines',
						value: airlines,
						onChange: setAirlines,
						type: 'text',
					}}
				/>
			</form>
			<button
				className="bg-[#c94f42] rounded-[50px] w-100 p-2"
				type="submit"
				onClick={(e) => addFlight(e)}
			>
				ADD
			</button>
		</>
	);
}

export default AddForm;
