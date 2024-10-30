import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/playlist.css";
import { useParams } from "react-router-dom";
import { changeURI } from "../../../features/URISlice";

const MS_IN_MINUTE = 60000;

function Playlist() {
	const token = useSelector((state) => state.token.value);
	const { id } = useParams();
	const [playlist, setPlaylist] = useState({});
	const [tracks, setTracks] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPlaylistTracks = async () => {
			if (!token) return;

			try {
				const response = await fetch(
					`https://api.spotify.com/v1/playlists/${id}/tracks`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const data = await response.json();
				setTracks(data.items);
			} catch (error) {
				console.error("Error fetching tracks:", error);
			}
		};

		const fetchPlaylist = async () => {
			if (!token) return;

			try {
				const response = await fetch(
					`https://api.spotify.com/v1/playlists/${id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const data = await response.json();
				setPlaylist(data);
			} catch (error) {
				console.error("Error fetching playlist:", error);
			}
		};

		fetchPlaylist();
		fetchPlaylistTracks();
	}, [id, token]);

	return (
		<>
			{playlist.error || !playlist ? (
				<>
					<p className="text-center">No playlist info yet</p>
				</>
			) : (
				<>
					<div
						className={
							playlist.name !== "Unknown Playlist"
								? "text-center d-none"
								: "text-center mt-4"
						}
					>
						No selected playlist yet...
					</div>
					<div
						className={
							id ? "playlist-info" : "playlist-info d-none"
						}
					>
						<header>
							<img
								src={
									playlist.images &&
									playlist.images.length > 0
										? playlist.images[0].url
										: "/Images/demo-playlist.jpg"
								}
								alt="Playlist cover"
								className="playlist-img"
							/>
							<div className="text">
								<h1>{playlist.name || "Unknown Playlist"}</h1>
								<p className="info">
									{playlist.owner?.display_name || "Unknown"}{" "}
									<span>•</span> {tracks.length || 0} songs
								</p>
							</div>
						</header>
						<div className="tracks">
							{tracks.length === 0 ? (
								<p>No tracks found in this playlist.</p>
							) : (
								tracks.map((track) => {
									return (
										<div
											className="track"
											key={track.id}
											onClick={() =>
												dispatch(
													changeURI(track.track.uri)
												)
											}
										>
											<div className="col impo">
												<img
													src={
														track.track.album
															.images[0]?.url ||
														"/Images/demo-playlist.jpg"
													}
													alt={track.track.name}
												/>
												<div className="info">
													<h4>{track.track.name}</h4>
													<p>
														{track.track.artists
															.map(
																(artist) =>
																	artist.name
															)
															.join(", ")}
													</p>
												</div>
											</div>
											<div className="col">
												{track.track.album.name}
											</div>
											<div className="col">
												{(
													track.track.duration_ms /
													MS_IN_MINUTE
												).toFixed(2)}
											</div>
										</div>
									);
								})
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Playlist;
