import { useState, useEffect } from "react";
import "./App.css";
import  { API_KEY } from '../api-key.js';
import TrackList from "./components/TrackList.js";
import TrackDetail from "./components/TrackDetail.js";
import { PageTitle } from "./components/PageTitle.js";

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);

  return (
    <>
      <PageTitle/>
      <button
        style={{ width: "300px", margin: "0 auto" }}
        onClick={() => {
            setSelectedTrackId(null)
            // setSelectedTrack(null)
        }}>
            reset selection
      </button>
      <div style={{display: 'flex'}}>
        <TrackList/>
        <TrackDetail/>
      </div>
    </>
  );
}

export default App;
