import React from "react";

function SearchBar({ query, setQuery }) {

	const handleInput = (e) => {
		const newValue = e.target.value;
		setQuery(newValue);
	};

	return (
		<div className="searchBar">
			<input
				type="text"
				placeholder="Search..."
				value={query}
				onChange={(e) => handleInput(e)}
			/>
			<ion-icon name="search-outline"></ion-icon>
		</div>
	);
}

export default SearchBar;
