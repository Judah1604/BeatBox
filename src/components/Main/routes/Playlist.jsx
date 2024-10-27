import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles/playlist.css";
import { useParams } from "react-router-dom";

function Playlist() {
	const token = useSelector((state) => state.token.value);
	const { id } = useParams();
	const [playlist, setPlaylist] = useState({});
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		const fetchPlaylistTracks = async () => {
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
				console.log(data);
				setTracks(data.items);
			} catch (error) {
				console.error("Error fetching tracks:", error);
			}
		};

		const fetchPlaylist = async () => {
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
				console.log(data);
				setPlaylist(data);
			} catch (error) {
				console.error("Error fetching playlist:", error);
			}
		};

		if (token) {
			fetchPlaylist();
			fetchPlaylistTracks();
		}
	}, [id, token]);

	return (
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
			<div className={id ? "playlist-info" : "playlist-info d-none"}>
				<header>
					<img
						src={
							playlist.images && playlist.images.length > 0
								? playlist.images[0].url
								: "/Images/demo-playlist.jpg"
						}
						alt="name"
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
					{tracks.map((track, index) => (
						<div className="track" key={index}>
							<div className="col impo">
								<img
									src={
										track.track.album.images[0]?.url ||
										"/Images/demo-playlist.jpg"
									}
									alt="name"
								/>
								<div className="info">
									<h4>{track.track.name}</h4>
									<p>
										{track.track.artists
											.map((artist) => artist.name)
											.join(", ")}
									</p>
								</div>
							</div>
							<div className="col">
								{(track.track.duration_ms / 60000).toFixed(2)}
							</div>
							<div className="col">
								<ion-icon name="play"></ion-icon>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Playlist;
