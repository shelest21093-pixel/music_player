import { useState, useEffect } from "react";
import { getTracks } from "../dal/api.ts";
import { type TrackListItemOutput } from "../dal/api.ts";

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);

  useEffect(() => {
    getTracks().then((json) => setTracks(json.data));
  }, []);

  const refresh = () => {
    setTracks(null);
    getTracks().then((json) => setTracks(json.data));
  };

  return { tracks, refresh };
}
