import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeId } from "../../../features/IdSlice";

function SearchResults({ query, results }) {
	const [selected, setSelected] = useState("Tracks"),
		toggles = ["Tracks", "Artistes", "Playlists"],
		dispatch = useDispatch();

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
					query === "" && results.error
						? "results-wrapper d-none"
						: "results-wrapper"
				}
			>
				<div className="toggles">
					{toggles.map((toggleName) => (
						<div
							className={
								selected === toggleName
									? "toggle active"
									: "toggle"
							}
							onClick={() => setSelected(toggleName)}
							key={toggleName} // Better to use a unique value
						>
							{toggleName}
						</div>
					))}
				</div>
				<div className="results">
					<div
						className={selected === "Tracks" ? "tracks" : "d-none"}
					>
						{!results.error && results.tracks?.items ? (
							results.tracks.items.map((track) => (
								<div className="track" key={track.id}>
									{" "}
									<img
										src={
											track.album.images[1]?.url ||
											"/default-image.jpg"
										}
										alt={track.name}
									/>
									<div className="info">
										<h4>{track.name}</h4>
										<p>
											Song |{" "}
											{track.artists
												.map((artist) => artist.name)
												.join(", ") || "Unknown Artist"}
										</p>
									</div>
								</div>
							))
						) : (
							<p>No tracks available.</p>
						)}
					</div>
					<div
						className={
							selected === "Playlists" ? "playlists" : "d-none"
						}
					>
						{!results.error && results.tracks?.items ? (
							results.playlists.items.map((playlist) => (
								<div
									className="playlist"
									key={playlist.id}
									onClick={dispatch(changeId(playlist.id))}
								>
									<img
										src={
											playlist.images[0]?.url ||
											"/Images/demo-playlist.jpg"
										}
										alt={playlist.name}
									/>
									<div className="info">
										<h4>{playlist.name}</h4>
										<p>
											Playlist |{" "}
											{playlist.owner.display_name}
										</p>
									</div>
								</div>
							))
						) : (
							<p>No playlists available.</p>
						)}
					</div>
					<div
						className={
							selected === "Artistes" ? "artistes" : "d-none"
						}
					>
						{!results.error && results.tracks?.items ? (
							results.artists.items.map((artist) => (
								<div className="artist" key={artist.id}>
									<img
										src={
											artist.images[0]?.url ||
											"/Images/demo-playlist.jpg"
										}
										alt={artist.name}
									/>
									<div className="info">
										<h4>{artist.name}</h4>
										<p>Artist</p>
									</div>
								</div>
							))
						) : (
							<p>No artistes available.</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchResults;
