import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles/playlist.css";

function Playlist() {
	const id = useSelector((state) => state.id.value),
		token = useSelector((state) => state.token.value);

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
			} catch (error) {
				console.error("Error fetching tracks:", error);
			}
		};

		fetchPlaylistTracks();
	}, [id]);

	return (
		<>
			<div className={id === "" ? "text-center mt-4" : "text-center d-none"}>
				No selected playlist yet...
			</div>
			<div
				className={id === "" ? "playlist-info d-none" : "playlist-info"}
			>
				<header>
					<img
						src="/Images/demo-playlist.jpg"
						alt="name"
						className="playlist-img"
					/>
					<div className="text">
						<h1>Towers at Sea</h1>
						<p className="info">
							<img
								src="/Images/demo-playlist.jpg"
								alt="owner-pic"
								className="owner-pic"
							/>
							Owner <span>•</span> 25 songs
						</p>
					</div>
				</header>
				<div className="tracks">
					<div className="track">
						<div className="col impo">
							<img src="/Images/demo-playlist.jpg" alt="name" />
							<div className="info">
								<h4>Tower</h4>
								<p>Artist</p>
							</div>
						</div>
						<div className="col">3:30</div>
						<div className="col">
							<ion-icon name="play"></ion-icon>
						</div>
					</div>
					<div className="track">
						<div className="col impo">
							<img src="/Images/demo-playlist.jpg" alt="name" />
							<div className="info">
								<h4>Tower</h4>
								<p>Artist</p>
							</div>
						</div>
						<div className="col">3:30</div>
						<div className="col">
							<ion-icon name="play"></ion-icon>
						</div>
					</div>
					<div className="track">
						<div className="col impo">
							<img src="/Images/demo-playlist.jpg" alt="name" />
							<div className="info">
								<h4>Tower</h4>
								<p>Artist</p>
							</div>
						</div>
						<div className="col">3:30</div>
						{/* divide by 60000 */}
						<div className="col">
							<ion-icon name="play"></ion-icon>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Playlist;
