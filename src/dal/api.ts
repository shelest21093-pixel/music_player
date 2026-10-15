import { API_KEY } from "../../api-key.ts";

export type GetTrackDetailOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type AttachmentDto = {
  url: string;
};

type TrackListitemOutputAttributes = {
  title: string;
  attachments: Array<AttachmentDto>;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListitemOutputAttributes;
};

export const getTrack = (
  trackId: string,
): Promise<{ data: GetTrackDetailOutputData }> => {
  return fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: {
        "api-key": API_KEY,
      },
    },
  ).then((res) => res.json());
};

export const getTracks = (): Promise<{ data: TrackListItemOutput[] }> => {
  return fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
    headers: {
      "api-key": API_KEY,
    },
  }).then((res) => res.json());
};
