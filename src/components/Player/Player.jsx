import { useSelector } from "react-redux";
import "./Styles/player.css";
import { useEffect } from "react";

function Player() {
	const uri = useSelector((state) => state.uri.value);

	useEffect(() => {
		console.log("URI:", uri);

		window.onSpotifyIframeApiReady = (IFrameAPI) => {
			const element = document.getElementById("embed-iframe");
			const options = {
				uri: uri, // No need for template string here
			};
			const callback = (EmbedController) => {
				// Add error handling or logging
				if (EmbedController) {
					console.log("Embed Controller created successfully");
				} else {
					console.error("Failed to create Embed Controller");
				}
			};
			IFrameAPI.createController(element, options, callback);
		};
	}, [uri]);

	return (
		<div className="player">
			<div id="embed-iframe"></div>
		</div>
	);
}

export default Player;
