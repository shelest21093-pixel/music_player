import { useState, useEffect } from "react";
import { getTrack, type GetTrackDetailOutputData } from "../dal/api.ts";

type Props = {
  selectedTrackId: string | null;
};

function TrackDetail({ selectedTrackId }: Props) {
  const [selectedTrack, setSelectedTrack] =
    useState<GetTrackDetailOutputData | null>(null);
  const trackId = selectedTrackId;

  useEffect(() => {
    if (!trackId) {
      return;
    }

    getTrack(trackId).then((json) => setSelectedTrack(json.data));
  }, [trackId]);

  return (
    <>
      <h2>Details</h2>
      {trackId === null ? (
        "Track is not selected"
      ) : selectedTrack === null ? (
        "Loading track details"
      ) : (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </>
  );
}

export default TrackDetail;
