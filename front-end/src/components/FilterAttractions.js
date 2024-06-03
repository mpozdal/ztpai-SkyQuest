import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import 'rsuite/DateRangePicker/styles/index.css';
import axios from 'axios';

function FilterAttractions({ items, setItems }) {
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

	const options = [
		'Krakow',
		'Zadar',
		'Budapest',
		'Berlin',
		'Paris',
		'Madrid',
		'London',
		'Warsaw',
	].map((item) => ({ label: item, value: item }));
	const categories = ['Museums', 'Park', 'Exhibitons', 'Stadium'].map(
		(item) => ({
			label: item,
			value: item,
		})
	);
	const [selectedOptionsCity, setSelectedOptionsCity] = useState([]);
	const [selectedOptionsCategory, setSelectedOptionsCategory] = useState([]);

	async function fetchAttractions(e) {
		e.preventDefault();
		let params = {};
		if (
			selectedOptionsCity.length > 0 &&
			selectedOptionsCategory.length > 0
		) {
			params = {
				city: selectedOptionsCity[0].value,
				category: selectedOptionsCategory[0].value,
			};
		} else if (
			selectedOptionsCity.length > 0 &&
			selectedOptionsCategory.length === 0
		) {
			params = {
				city: selectedOptionsCity[0].value,
			};
		} else if (
			selectedOptionsCity.length === 0 &&
			selectedOptionsCategory.length > 0
		) {
			params = {
				category: selectedOptionsCategory[0].value,
			};
		}
		try {
			console.log(params);
			await axios({
				url: 'http://localhost:8080/api/v1/attraction-filter',
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
				<div className="text-[#c94f42] font-bold">WHERE</div>
				<Select
					isMulti
					className="w-full "
					options={options}
					placeholder={'City'}
					closeMenuOnSelect={false}
					isSearchable={true}
					styles={colourStyles}
					value={selectedOptionsCity}
					onChange={setSelectedOptionsCity}
				/>
			</div>
			<div className="w-full">
				<div className="text-[#c94f42] font-bold">CATEGORY</div>
				<Select
					isMulti
					className="w-full"
					options={categories}
					placeholder={'Category'}
					closeMenuOnSelect={false}
					isSearchable={true}
					styles={colourStyles}
					onChange={setSelectedOptionsCategory}
					value={selectedOptionsCategory}
				/>
			</div>

			<button
				onClick={(e) => fetchAttractions(e)}
				class="mt-4 rounded-lg bg-[#c94f42] px-8 py-2  text-white outline-none hover:opacity-80 focus:ring"
			>
				EXPLORE
			</button>
		</div>
	);
}

export default FilterAttractions;
