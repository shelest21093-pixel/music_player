import { useState, useEffect } from "react";
import { getTrack, type GetTrackDetailOutputData } from "../dal/api.ts";

export const useTrackDetail = (selectedTrackId: string | null) => {
  const [selectedTrack, setSelectedTrack] =
    useState<GetTrackDetailOutputData | null>(null);
  const trackId = selectedTrackId;

  useEffect(() => {
    if (!trackId) {
      return;
    }

    getTrack(trackId).then((json) => setSelectedTrack(json.data));
  }, [trackId]);

  return { selectedTrack, setSelectedTrack };
};
