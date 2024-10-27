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
				<NavLink
					to="/search"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<ion-icon name="search-outline"></ion-icon>Search
				</NavLink>
				<NavLink
					to="/playlist"
					className={({ isActive }) =>
						isActive ? "active disabled" : "disabled"
					}
				>
					<ion-icon name="albums-outline"></ion-icon>Playlists
				</NavLink>
				<NavLink to="/recently-played">
					<ion-icon name="grid-outline"></ion-icon>Recently Played
				</NavLink>
			</div>
		</div>
	);
}

export default Dashboard;
