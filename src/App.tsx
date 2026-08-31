import { useState, useEffect } from "react";
import "./App.css";
import  { API_KEY } from '../api-key.js';

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [tracks, setTracks] = useState([]);

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
        <h1>Music player</h1>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Music player</h1>
        <h1>Tracks not found</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Music player</h1>
      <button
        style={{ width: "300px", margin: "0 auto" }}
        onClick={() => {
          setSelectedTrackId(null)
          setSelectedTrack(null)
        }}
      >
        reset selection
      </button>
      <div style={{display: 'flex'}}>
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
                fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${track.id}`, {
                  headers: {
                    'api-key' : API_KEY
                  }
                }).then(res => res.json())
                .then(json => setSelectedTrack(json.data))
                }}>{track.attributes.title}</h3>
              <audio controls>
                <source src={track.attributes.attachments[0].url} type="audio/mpeg" />
              </audio>
            </li>
          ))}
        </ul>
        <div>
          <h2>Details</h2>
          {selectedTrackId === null ? 'Track is not selected' :
            selectedTrack === null ? 'Loading track details' :
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
