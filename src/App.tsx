import { useState } from "react";
import "./App.css";
import { TrackList } from "./components/TrackList.js";
import TrackDetail from "./components/TrackDetail.js";
import { PageTitle } from "./components/PageTitle.js";

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null): void => {
    setSelectedTrackId(id);
  };

  return (
    <>
      <PageTitle />
      <div style={{ display: "flex" }}>
        <TrackList
          onTrackSelect={handleTrackSelect}
          selectedTrackId={selectedTrackId}
        />
        <TrackDetail selectedTrackId={selectedTrackId} />
      </div>
    </>
  );
}

export default App;
