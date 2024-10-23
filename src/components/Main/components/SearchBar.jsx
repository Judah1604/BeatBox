import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeValue } from "../../../features/resultsSlice";

function SearchBar() {
	const dispatch = useDispatch(),
		[query, setQuery] = useState("");

	const handleInput = (e) => {
		const newValue = e.target.value; 
		setQuery(newValue);  

		if (newValue !== "") {
			dispatch(changeValue(true));
		} else {
			dispatch(changeValue(false));
		}
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
