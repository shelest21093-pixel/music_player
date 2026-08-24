import { useState, useEffect } from "react";
import "./App.css";
import  { API_KEY } from '../api-key.js';

// const tracks = [
//   {
//     id: 1,
//     title: "music track 1",
//     url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
//   },
//   {
//     id: 2,
//     title: "instrumental",
//     url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
//   },
//   {
//     id: 3,
//     title: "music track 2",
//     url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
//     isSelected: true,
//   },
//   {
//     id: 4,
//     title: "instrumental 2",
//     url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
//   },
// ];

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
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
        onClick={() => setSelectedTrackId(null)}
      >
        reset selection
      </button>
      {tracks.map((track) => (
        <div
          key={track.id}
          style={{
            border: selectedTrackId === track.id ? "2px solid blue" : "none",
          }}
        >
          <h3 onClick={() => setSelectedTrackId(track.id)}>{track.attributes.title}</h3>
          <audio controls>
            <source src={track.attributes.attachments[0].url} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </>
  );
}

export default App;
