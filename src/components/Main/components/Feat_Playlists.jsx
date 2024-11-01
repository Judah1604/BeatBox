import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Feat_Playlists() {
	const [playlists, setPlaylists] = useState([]),
		[res, setRes] = useState({}),
		token = useSelector((state) => state.token.value);

	useEffect(() => {
		const fetchFeaturedPlaylists = async () => {
			try {
				const response = await fetch(
					"https://api.spotify.com/v1/browse/featured-playlists?limit=9",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const data = await response.json();
                setRes(data)
				setPlaylists(data.playlists.items);
			} catch (error) {
				console.error("Error fetching playlists:", error);
			}
		};

		fetchFeaturedPlaylists();
	}, [token]);

	return (
		<div className="feat_playlists">
			<h3>Featured Playlists</h3>
			<div className="row mt-4">
				{!res.error ? (
					playlists.map((playlist, index) => {
						return (
							<div className="col-md-3 playlist" key={index}>
								<Link to={`/playlist/${playlist.id}`}>
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
								</Link>
							</div>
						);
					})
				) : (
					<>
						<p className="text-center">Playlists loading...</p>
					</>
				)}
			</div>
		</div>
	);
}

export default Feat_Playlists;
