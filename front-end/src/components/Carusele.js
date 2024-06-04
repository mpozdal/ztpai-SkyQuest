import React, { useEffect, useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data';
import axios from 'axios';
function Carusele({ text }) {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetchFlights();
	}, []);

	async function fetchFlights() {
		try {
			await axios({
				url: 'http://localhost:8080/api/v1/flight',
				method: 'get',
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((response) => {
				setItems(response?.data);
				console.log(response);
			});
		} catch (e) {
			console.log(e);
		}
	}

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<main className="m-auto p-5" style={{}}>
			<div
				className=""
				style={{
					fontSize: '3rem',
					fontWeight: 700,
				}}
			>
				{text}
			</div>

			<div>
				<Slider {...settings} className="">
					{items.map((item) => (
						<Card data={item} />
					))}
				</Slider>
			</div>
		</main>
	);
}

export default Carusele;
