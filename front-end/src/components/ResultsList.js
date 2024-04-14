import React, { useEffect, useState } from 'react';
import Result from './Result';
import ReactPaginate from 'react-paginate';
import RestaurantResult from './RestaurantResult';
function ResultsList({ itemsPerPage, restaurant }) {
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const items = [...Array(33).keys()];
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};
	return (
		<>
			<div className="mt-5 w-1/2 flex flex-col justify-content-center gap-3 mb-5">
				{currentItems &&
					currentItems.map((item) =>
						restaurant ? <RestaurantResult /> : <Result />
					)}
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
		</>
	);
}

export default ResultsList;
