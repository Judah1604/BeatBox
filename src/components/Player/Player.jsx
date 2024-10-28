import { useSelector } from "react-redux";
import "./Styles/player.css";
import { useEffect } from "react";

function Player() {
	const uri = useSelector((state) => state.uri.value);

	useEffect(() => {
		if (!uri) return; // Exit if uri is not set

		const element = document.getElementById("embed-iframe");
		const options = {
			width: "100%",
			height: "210",
			uri: uri,
		};

		const callback = (EmbedController) => {
			// You can handle the EmbedController here if needed
		};

		window.onSpotifyIframeApiReady = (IFrameAPI) => {
			IFrameAPI.createController(element, options, callback);
		};

		// Cleanup function
		return () => {
			if (element) {
				element.innerHTML = ""; // Clean up the iframe element
			}
		};
	}, [uri]); // Run effect when uri changes

	return (
		<div className="player">
			<div id="embed-iframe"></div>
		</div>
	);
}

export default Player;
