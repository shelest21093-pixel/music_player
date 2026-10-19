import { useTrackDetail } from "../bll/useTrackDetail.tsx";

type Props = {
  selectedTrackId: string | null;
};

function TrackDetail({ selectedTrackId }: Props) {
  const { selectedTrack } = useTrackDetail(selectedTrackId);

  return (
    <>
      <h2>Details</h2>
      {selectedTrackId === null ? (
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
