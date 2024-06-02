import React, { useEffect, useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data';
function Carusele({ text }) {
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
					<Card data={data[0]} />
					<Card data={data[0]} />
					<Card data={data[0]} />
					<Card data={data[0]} />
					<Card data={data[0]} />
					<Card data={data[0]} />
				</Slider>
			</div>
		</main>
	);
}

export default Carusele;
