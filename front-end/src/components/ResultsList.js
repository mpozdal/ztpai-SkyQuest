import React, { useEffect, useState } from 'react';
import Result from './Result';
import ReactPaginate from 'react-paginate';
import RestaurantResult from './RestaurantResult';
import FlightResult from './FlightResult';
import axios from 'axios';
function ResultsList({ itemsPerPage, restaurant, attraction, flight }) {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (flight) fetchFlights();
		else if (restaurant) fetchRestaurants();
		else if (attraction) fetchAttractions();
	}, []);
	useEffect(() => {
		if (items.length > 0) {
			setIsLoading(false);
		}
	}, [items]);
	async function fetchFlights() {
		try {
			await axios({
				url: 'http://localhost:8080/api/v1/flight',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'get',
			}).then((response) => {
				console.log(response.data);
				setItems(response?.data);
			});
		} catch (e) {
			console.log(e);
		}
	}
	async function fetchRestaurants() {
		try {
			await axios({
				url: 'http://localhost:8080/api/v1/restaurant',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'get',
			}).then((response) => {
				setItems(response.data);
				setIsLoading(false);
			});
		} catch (e) {
			console.log(e);
		}
	}
	async function fetchAttractions() {
		try {
			await axios({
				url: 'http://localhost:8080/api/v1/attraction',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'get',
			}).then((response) => {
				setItems(response.data);
				setIsLoading(false);
			});
		} catch (e) {
			console.log(e);
		}
	}

	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, items]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};
	return isLoading ? (
		<div>Loading</div>
	) : (
		<div className="flex align-items-center flex-col">
			<div className="mt-5 w-full flex flex-col justify-content-center gap-3 mb-5">
				{currentItems &&
					restaurant &&
					currentItems.map((item) => (
						<RestaurantResult data={item} />
					))}
				{currentItems &&
					flight &&
					currentItems.map((item) => <FlightResult data={item} />)}
				{currentItems &&
					attraction &&
					currentItems.map((item) => <Result item={item} />)}
			</div>
			<ReactPaginate
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				previousLabel="< previous"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
}

export default ResultsList;
