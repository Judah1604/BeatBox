import React from 'react'

function Feat_Playlists() {
  return (
		<div className="feat_playlists">
			<h2>Featured Playlists</h2>
			<div className="row mt-4">
				<div className="col-md-3 playlist">
                    <img src="/Images/demo-playlist.jpg" alt="Playlist Name" />
                    <h4>Towers at Sea</h4>
                </div>
				<div className="col-md-3 playlist">
                    <img src="/Images/demo-playlist.jpg" alt="Playlist Name" />
                    <h4>Towers at Sea</h4>
                </div>
				<div className="col-md-3 playlist">
                    <img src="/Images/demo-playlist.jpg" alt="Playlist Name" />
                    <h4>Towers at Sea</h4>
                </div>
			</div>
		</div>
  );
}

export default Feat_Playlists;