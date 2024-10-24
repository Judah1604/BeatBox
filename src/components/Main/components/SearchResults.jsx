import React, { useState } from "react";

function SearchResults({ query, results }) {
	const [selected, setSelected] = useState("Tracks"),
		toggles = ["Tracks", "Artistes", "Playlists"];

	return (
		<div className="searchResults">
			<div
				className={
					query === "" && results.error ? "demo" : "demo d-none"
				}
			>
				Your search result will appear here...
			</div>
			<div
				className={
					query === "" && results.error ? "results-wrapper d-none" : "results-wrapper"
				}
			>
				<div className="toggles">
					{toggles.map((toggleName, index) => {
						return (
							<div
								className={
									selected === toggleName
										? "toggle active"
										: "toggle"
								}
								onClick={() => setSelected(toggleName)}
								key={index}
							>
								{toggleName}
							</div>
						);
					})}
				</div>
				<div className="results">
					<div
						className={selected === "Tracks" ? "tracks" : "d-none"}
					>
						<div className="track">
							<img src="/Images/demo-playlist.jpg" alt="name" />
							<div className="info">
								<h4>Towers At Sea</h4>
								<p>Song | Artist</p>
							</div>
						</div>
					</div>
					<div
						className={
							selected === "Playlists" ? "playlists" : "d-none"
						}
					>
						<div className="playlist">
							<img src="/Images/demo-playlist.jpg" alt="name" />
							<div className="info">
								<h4>PlayList Name</h4>
								<p>Playlist | Owner Name</p>
							</div>
						</div>
					</div>
					<div
						className={
							selected === "Artistes" ? "artistes" : "d-none"
						}
					>
						<div className="artist">
							<img src="/Images/demo-playlist.jpg" alt="name" />
							<div className="info">
								<h4>Artist Name</h4>
								<p>Artist</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchResults;
