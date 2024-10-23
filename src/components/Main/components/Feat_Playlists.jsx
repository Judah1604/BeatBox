import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Feat_Playlists() {
	const [playlists, setPlaylists] = useState([]),
        token = useSelector((state) => state.token.value)

	useEffect(() => {
		const fetchFeaturedPlaylists = async () => {
			try {
				const response = await fetch(
					"https://api.spotify.com/v1/browse/featured-playlists?limit=10",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const data = await response.json();
				console.log(data);
				setPlaylists(data.playlists.items);
			} catch (error) {
				console.error("Error fetching playlists:", error);
			}
		};

		fetchFeaturedPlaylists();
	});

	return (
		<div className="feat_playlists">
			<h2>Featured Playlists</h2>
			<div className="row mt-4">
				{playlists.map((playlist, index) => {
					return (
						<div className="col-md-3 playlist" key={index}>
							<img
								src={playlist.images[0].url}
								alt={playlist.name}
							/>
							<img
								src={playlist.images[0].url}
								alt={playlist.name}
                                className="blur"
							/>
							<h4>{playlist.name}</h4>
                            <p className="uri">{playlist.uri}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Feat_Playlists;
