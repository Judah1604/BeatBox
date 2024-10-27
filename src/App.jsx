import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base/base.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Main from "./components/Main/routes/Main";
import Search from "./components/Main/routes/Search";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeToken } from "./features/tokenSlice";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Playlist from "./components/Main/routes/Playlist";

function App() {
	const client_id = "1c772d37b7a748a4acfa00530e3c59bf";
	const client_secret = "3d12df8c557a4b918b5f862c26833f8c",
		dispatch = useDispatch();

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const response = await fetch(
					"https://accounts.spotify.com/api/token",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
						body: new URLSearchParams({
							grant_type: "client_credentials",
							client_id: client_id,
							client_secret: client_secret,
						}),
					}
				);

				const data = await response.json();
				dispatch(changeToken(data.access_token));
			} catch (error) {
				console.error("Error fetching token:", error);
			}
		};

		fetchToken();
	}, [client_id, client_secret]); // Add dependencies if necessary

	return (
		<div className="wrapper">
			<Router>
				<Dashboard />
				<Routes>
					<Route Component={Main} path="/" />
					<Route Component={Search} path="/search" />
					<Route Component={Playlist} path="/playlist/:id" />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
