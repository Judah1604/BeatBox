import SearchBar from './components/SearchBar';
import Feat_Playlists from './components/Feat_Playlists';
import './styles/main.css';

function Main() {
	return (
		<div className="main">
			<SearchBar />
            <Feat_Playlists />
		</div>
	);
}

export default Main;
