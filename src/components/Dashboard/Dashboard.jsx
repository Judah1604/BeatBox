import { NavLink } from "react-router-dom";
import "./styles.css";

function Dashboard() {
	return (
		<div className="navbar">
			<h1 className="logo">BeatBox.</h1>
			<div className="nav">
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<ion-icon name="home-outline"></ion-icon>
					Home
				</NavLink>
				<NavLink to="/search">
					<ion-icon name="search-outline"></ion-icon>Search
				</NavLink>
				<NavLink to="/playlists">
					<ion-icon name="albums-outline"></ion-icon>Playlists
				</NavLink>
			</div>
		</div>
	);
}

export default Dashboard;
