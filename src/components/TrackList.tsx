import { useState, useEffect } from "react";
import  { API_KEY } from '../../api-key.js';

function TrackList() {
    const [tracks, setTracks] = useState([]);
    const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);

      useEffect(
    () => {
      fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
          'api-key' : API_KEY
        }
      }).then(res => res.json())
      .then(json => setTracks(json.data))
    }, []
  );

    if (tracks === null) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Tracks not found</h1>
      </div>
    );
  }

  return (
    <ul>
        {tracks.map((track) => (
        <li
            key={track.id}
            style={{
            border: selectedTrackId === track.id ? "2px solid blue" : "none",
            }}
        >
            <h3 onClick={() => {
            setSelectedTrackId(track.id)
            }}>{track.attributes.title}</h3>
            <audio controls>
            <source src={track.attributes.attachments[0].url} type="audio/mpeg" />
            </audio>
        </li>
        ))}
    </ul>
  )
}

export default TrackList;
