import "./App.css";
import { TrackList } from "./ui/TrackList.js";
import TrackDetail from "./ui/TrackDetail.js";
import { PageTitle } from "./ui/PageTitle.js";
import { useTrackSelection } from "./bll/useTrackSelection.tsx";

function App() {
  const { selectedTrackId, handleTrackSelect } = useTrackSelection();

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
