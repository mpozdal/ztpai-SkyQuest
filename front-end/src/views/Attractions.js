import React from 'react';
import Header from '../components/Header';
import Select from 'react-select';
import ResultsList from '../components/ResultsList';
import FilterAttractions from '../components/FilterAttractions';

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
			<FilterAttractions />
			<div className="w-[80%] flex justify-content-center flex-col ">
				<ResultsList itemsPerPage={10} attraction />
			</div>
		</div>
	);
}

export default Attractions;
