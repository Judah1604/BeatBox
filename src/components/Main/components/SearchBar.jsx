import React from "react";

function SearchBar() {
	return (
		<div className="searchBar">
			<input type="text" placeholder="Search..." />
			<ion-icon name="search-outline"></ion-icon>
		</div>
	);
}

export default SearchBar;
