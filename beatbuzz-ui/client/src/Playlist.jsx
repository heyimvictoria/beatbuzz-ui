import React, { useState } from 'react';
import axios from 'axios';

const Playlist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleCreatePlaylist = async () => {
    try {
      const response = await axios.post('/api/playlists/create', {
        playlistName: playlistName
      });
      console.log('Playlist created:', response.data);
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  const handleAddSong = async () => {
    try {
      const response = await axios.post('/api/songs/add', {
        playlistName: playlistName,
        songTitle: songTitle,
        artist: artist
      });
      console.log('Song added:', response.data);
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div>
      <h2>Create Playlist</h2>
      <input
        type="text"
        placeholder="Playlist Name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>

      <h2>Add Song</h2>
      <input
        type="text"
        placeholder="Song Title"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
};

export default Playlist;
