import React from 'react';
import Header from '../components/Header';
import Select from 'react-select';
import ResultsList from '../components/ResultsList';
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
function Restaurants() {
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
	return (
		<div className="background ">
			<Header />

			<div className="flex justify-content-center  align-items-center flex-col">
				<div className="w-1/2 flex justify-content-center  align-items-center">
					<Select
						options={options}
						styles={colourStyles}
						className="w-full"
						placeholder={'City'}
						isSearchable
					/>
					<Select
						options={cusine}
						styles={colourStyles}
						className="w-full"
						placeholder={'Cusine'}
						isMulti
					/>
					<Select
						options={price}
						styles={colourStyles}
						className="w-full"
						placeholder={'Price'}
						isMulti
					/>
					<button class=" ml-2 rounded-lg bg-[#c94f42] px-8 py-2  text-white outline-none hover:opacity-80 focus:ring">
						SEARCH
					</button>
				</div>
				<ResultsList itemsPerPage={10} restaurant />
			</div>
		</div>
	);
}

export default Restaurants;
