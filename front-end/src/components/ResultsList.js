import React, { useEffect, useState } from 'react';
import Result from './Result';
import ReactPaginate from 'react-paginate';
import RestaurantResult from './RestaurantResult';
import FlightResult from './FlightResult';
import axios from 'axios';
function ResultsList({
	itemsPerPage,
	restaurant,
	attraction,
	flight,
	items,
	setItems,
}) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (flight) fetchData('flight');
		else if (restaurant) fetchData('restaurant');
		else if (attraction) fetchData('attraction');
	}, []);
	useEffect(() => {
		if (items?.length > 0) {
			setIsLoading(false);
		}
	}, [items]);
	async function fetchData(type) {
		try {
			await axios({
				url: 'http://localhost:8080/api/v1/' + type,
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

	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(items?.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items?.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, items]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items?.length;
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
						<RestaurantResult data={item} key={item.id} />
					))}
				{currentItems &&
					flight &&
					currentItems.map((item) => (
						<FlightResult data={item} key={item.id} />
					))}
				{currentItems &&
					attraction &&
					currentItems.map((item) => (
						<Result item={item} key={item.id} />
					))}
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
