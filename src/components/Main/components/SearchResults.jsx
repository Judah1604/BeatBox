import React from "react";
import { useSelector } from "react-redux";

function SearchResults() {
	const value = useSelector((state) => state.results.value);

	return (
		<div className={value ? "searchResults visible" : "searchResults"}>
			Here are the search results...
		</div>
	);
}

export default SearchResults;
