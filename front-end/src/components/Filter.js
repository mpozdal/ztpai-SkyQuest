import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import 'rsuite/DateRangePicker/styles/index.css';
import axios from 'axios';

function Filter({ items, setItems }) {
	const colourStyles = {
		multiValue: (provided) => ({
			...provided,
			width: 'auto', // Ustaw szerokość na auto, aby umożliwić wielokrotne wartości w jednym wierszu
			overflowX: 'hidden', // Dodaj poziomy przewijanie
		}),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isDisabled ? 'gray' : 'white',
				color: '#000',
				cursor: isDisabled ? 'not-allowed' : 'default',
			};
		},
	};

	const places = [
		{ value: 'Krakow', label: 'Krakow [KRK]' },
		{ value: 'Katowice', label: 'Katowice' },
		{ value: 'Warszawa', label: 'Warszawa' },
		{ value: 'Warszawa', label: 'Warszawa Modlin' },
		{ value: 'Poland', label: 'Poland' },
	];
	const dates = [
		{ value: 'april-2024', label: 'April 2024' },
		{ value: 'may-2024', label: 'May 2024' },
		{ value: 'june-2024', label: 'June 2024' },
		{ value: 'july-2024', label: 'July 2024' },
	];

	const [selectedOptionsDate, setSelectedOptionsDate] = useState([]);
	const [selectedOptionsDepart, setSelectedOptionsDepart] = useState([]);
	const [selectedOptionsArrive, setSelectedOptionsArrive] = useState([]);
	const handleChange = (selected) => {
		setSelectedOptionsDate(selected);
	};
	const handleChange2 = (selected) => {
		setSelectedOptionsArrive(selected);
	};
	useEffect(() => {
		if (
			selectedOptionsDate.length === 0 &&
			selectedOptionsDepart.length === 0 &&
			selectedOptionsArrive.length === 0
		)
			fetchFlights();
	}, [selectedOptionsDate, selectedOptionsDepart, selectedOptionsArrive]);

	async function fetchFlights(e) {
		if (e) e.preventDefault();
		let params = {};
		if (
			selectedOptionsArrive.length > 0 &&
			selectedOptionsDepart.length > 0
		) {
			params = {
				depart: selectedOptionsDepart[0].value,
				arrive: selectedOptionsArrive[0].value,
			};
		} else if (
			selectedOptionsArrive.length > 0 &&
			selectedOptionsDepart.length === 0
		) {
			params = {
				arrive: selectedOptionsArrive[0].value,
			};
		} else if (
			selectedOptionsArrive.length === 0 &&
			selectedOptionsDepart.length > 0
		) {
			params = {
				depart: selectedOptionsDepart[0].value,
			};
		}
		try {
			console.log(params);
			await axios({
				url: 'http://localhost:8080/api/v1/flight-filter',
				method: 'get',
				params: params,
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((response) => {
				console.log(response);
				setItems(response.data);
			});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className="w-[80%] flex justify-content-center gap-2 flex-col md:flex-row">
			<div className="w-full">
				<div className="text-[#c94f42] font-bold">FROM</div>
				<Select
					isMulti
					className="w-full "
					options={places}
					placeholder={'Airport or country'}
					closeMenuOnSelect={false}
					isSearchable={true}
					styles={colourStyles}
					value={selectedOptionsDepart}
					onChange={setSelectedOptionsDepart}
				/>
			</div>
			<div className="w-full">
				<div className="text-[#c94f42] font-bold">TO</div>
				<Select
					isMulti
					className="w-full"
					options={places}
					placeholder={'Airport or country'}
					closeMenuOnSelect={false}
					isSearchable={true}
					styles={colourStyles}
					onChange={handleChange2}
					value={selectedOptionsArrive}
				/>
			</div>

			<div className="w-full">
				<div className="text-[#c94f42] font-bold">WHEN</div>
				<Select
					isMulti
					className="w-full "
					placeholder={'Month'}
					closeMenuOnSelect={false}
					styles={colourStyles}
					options={dates}
					value={selectedOptionsDate}
					onChange={handleChange}
				/>
			</div>

			<button
				onClick={(e) => fetchFlights(e)}
				class="mt-4 rounded-lg bg-[#c94f42] px-8 py-2  text-white outline-none hover:opacity-80 focus:ring"
			>
				EXPLORE
			</button>
		</div>
	);
}

export default Filter;
