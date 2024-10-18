import "./styles.css";

function Dashboard() {
	return (
		<div className="navbar">
			<h1 className="logo">BeatBox.</h1>
			<div className="nav">
				<a href="/" className="active">
					<ion-icon name="home-outline"></ion-icon>
					Home
				</a>
				<a href="#">
					<ion-icon name="grid-outline"></ion-icon>Genres
				</a>
				<a href="#">
					<ion-icon name="albums-outline"></ion-icon>Playlists
				</a>
			</div>
		</div>
	);
}

export default Dashboard;
