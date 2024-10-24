import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import "./styles/search.css";
import { useSelector } from "react-redux";

function Search() {
	const [query, setQuery] = useState(""),
        [results, setResults] = useState({}),
		token = useSelector((state) => state.token.value);


	useEffect(() => {
		const fetchSearchResults = async () => {
			try {
				const response = await fetch(
					`https://api.spotify.com/v1/search?q=${query}&type=track%2Cplaylist%2Cartist&limit=12`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const data = await response.json();
				console.log(data);
                setResults(data)
			} catch (error) {
				console.error("Error fetching search results:", error);
			}
		};

		fetchSearchResults();
	}, [query]);

	return (
		<div className="search">
			<SearchBar query={query} setQuery={setQuery} />
			<SearchResults query={query} results={results}/>
		</div>
	);
}

export default Search;
