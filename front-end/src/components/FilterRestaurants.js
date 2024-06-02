import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import 'rsuite/DateRangePicker/styles/index.css';
import axios from 'axios';

function FilterRestaurants() {
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
	const cusine = [
		'All',
		'Italian',
		'Polish',
		'Balkan',
		'Greek',
		'English',
		'Fast food',
		'Amercian',
		'Kebab',
		'Sushi',
		'Asian',
	].map((item) => ({ label: item, value: item }));
	const price = ['All', '$', '$$', '$$$', '$$$$', '$$$$$'].map((item) => ({
		label: item,
		value: item,
	}));
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

	const [selectedOptionsCity, setSelectedOptionsCity] = useState([]);
	const [selectedOptionCusine, setSelectedOptionCusine] = useState([]);
	const [selectedOptionPrice, setSelectedOptionPrice] = useState([]);

	return (
		<div className="w-[80%] flex justify-content-center gap-2">
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
				<div className="text-[#c94f42] font-bold">CUSINE</div>
				<Select
					isMulti
					className="w-full"
					options={cusine}
					placeholder={'Category'}
					closeMenuOnSelect={false}
					isSearchable={true}
					styles={colourStyles}
					onChange={setSelectedOptionCusine}
					value={selectedOptionCusine}
				/>
			</div>
			<div className="w-full">
				<div className="text-[#c94f42] font-bold">PRICE</div>
				<Select
					isMulti
					className="w-full"
					options={price}
					placeholder={'Category'}
					closeMenuOnSelect={false}
					isSearchable={true}
					styles={colourStyles}
					onChange={setSelectedOptionPrice}
					value={selectedOptionPrice}
				/>
			</div>

			<button class="mt-4 rounded-lg bg-[#c94f42] px-8 py-2  text-white outline-none hover:opacity-80 focus:ring">
				EXPLORE
			</button>
		</div>
	);
}

export default FilterRestaurants;
