import { useState, useEffect } from "react";
import { API_KEY } from "../../api-key.ts";
import { TrackItem, type TrackListItemOutput } from "./TrackItem.js";

type Props = {
  onTrackSelect: (id: string | null) => void;
  selectedTrackId: string | null;
};

export function TrackList({ onTrackSelect, selectedTrackId }: Props) {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

  useEffect(() => {
    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        "api-key": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((json) => setTracks(json.data));
  }, []);

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

  const handleResetClick = () => {
    onTrackSelect(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelect(trackId);
  };

  return (
    <>
      <button
        style={{ width: "300px", margin: "0 auto" }}
        onClick={handleResetClick}
      >
        {" "}
        reset selection{" "}
      </button>
      <br />
      <ul>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={selectedTrackId === track.id ? true : false}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </>
  );
}
