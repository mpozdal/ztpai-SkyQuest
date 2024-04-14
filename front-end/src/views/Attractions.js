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
const categories = ['Museums', 'Park', 'Exhibitons', 'Stadium'].map((item) => ({
	label: item,
	value: item,
}));
function Attractions() {
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
		<div className="background">
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
						options={categories}
						styles={colourStyles}
						className="w-full"
						placeholder={'Category'}
						isSearchable
						isMulti
					/>
					<button class=" ml-2 rounded-lg bg-[#c94f42] px-8 py-2  text-white outline-none hover:opacity-80 focus:ring">
						SEARCH
					</button>
				</div>
				<ResultsList itemsPerPage={10} />
			</div>
		</div>
	);
}

export default Attractions;
