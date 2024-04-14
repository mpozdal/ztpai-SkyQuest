import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import HomeDeals from '../components/HomeDeals';
export default function Home() {
	return (
		<div className="">
			<div
				style={{
					position: 'relative',
					backgroundImage: 'url(/assets/background2.svg)',
					backgroundAttachment: 'fixed',
					width: '100%',
					height: '100vh',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					scrollSnapAlign: 'center',
				}}
			>
				<Header />
				<Title />
			</div>
			<div className="background" id="desc">
				<HomeDeals text={'TRENDING'} />
				<HomeDeals text={'LATEST DEALS'} />
			</div>
		</div>
	);
}
