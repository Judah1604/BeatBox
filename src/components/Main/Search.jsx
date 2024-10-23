import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./styles/search.css";

function Search() {
	return (
		<>
			<SearchBar />
			<SearchResults />
		</>
	);
}

export default Search;
