import React, { useState } from 'react';
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
	const [items, setItems] = useState([]);
	return (
		<div className="background">
			<Header />
			<FilterAttractions items={items} setItems={setItems} />
			<div className="w-[80%] flex justify-content-center flex-col ">
				<ResultsList
					itemsPerPage={10}
					attraction
					items={items}
					setItems={setItems}
				/>
			</div>
		</div>
	);
}

export default Attractions;
