import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import 'rsuite/DateRangePicker/styles/index.css';
import axios from 'axios';

function Filter() {
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
		{ value: 'Krakow [KRK]', label: 'Krakow [KRK]' },
		{ value: 'Katowice [KTW]', label: 'Katowice' },
		{ value: 'Warszawa [WAW]', label: 'Warszawa' },
		{ value: 'Warszawa [WMI]', label: 'Warszawa Modlin' },
		{ value: 'Poland', label: 'Poland' },
	];
	const dates = [
		{ value: 'april-2024', label: 'April 2024' },
		{ value: 'may-2024', label: 'May 2024' },
		{ value: 'june-2024', label: 'June 2024' },
		{ value: 'july-2024', label: 'July 2024' },
	];
	const allMonthsOption = { value: 'all', label: 'All upcoming months' };
	const everywhereOption = { value: 'everywhere', label: 'Everywhere' };
	const [selectedOptionsDepart, setSelectedOptionsDepart] = useState([]);
	const [selectedOptionsArrive, setSelectedOptionsArrive] = useState([]);
	const [selectedOptionsDate, setSelectedOptionsDate] = useState([]);

	const handleChange = (selected) => {
		setSelectedOptionsDate(selected);
		if (selected.some((option) => option.value === 'all')) {
			setSelectedOptionsDate([allMonthsOption]);
		} else if (
			selected.some((option) => option.value !== 'all') &&
			selected.includes(allMonthsOption)
		) {
			setSelectedOptionsDate(
				selected.filter((option) => option.value !== 'all')
			);
		}
	};
	const handleChange2 = (selected) => {
		setSelectedOptionsArrive(selected);
		if (selected.some((option) => option.value === 'everywhere')) {
			setSelectedOptionsArrive([everywhereOption]);
		} else if (
			selected.some((option) => option.value !== 'everywhere') &&
			selected.includes(everywhereOption)
		) {
			setSelectedOptionsArrive(
				selected.filter((option) => option.value !== 'everywhere')
			);
		}
	};
	return (
		<div className="w-[80%] flex justify-content-center gap-2">
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
					options={[everywhereOption, ...places]}
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
					options={[allMonthsOption, ...dates]}
					value={selectedOptionsDate}
					onChange={handleChange}
					defaultValue={allMonthsOption.value}
				/>
			</div>

			<button class="mt-4 rounded-lg bg-[#c94f42] px-8 py-2  text-white outline-none hover:opacity-80 focus:ring">
				EXPLORE
			</button>
		</div>
	);
}

export default Filter;
