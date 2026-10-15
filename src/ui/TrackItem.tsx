import { type TrackListItemOutput } from "../dal/api.ts";

type Props = {
  track: TrackListItemOutput;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function TrackItem({ track, isSelected, onSelect }: Props) {
  const handleClick = () => onSelect(track.id);

  return (
    <li
      key={track.id}
      style={{
        border: isSelected ? "2px solid blue" : "none",
      }}
    >
      <h3 onClick={handleClick}>{track.attributes.title}</h3>
      <audio controls>
        <source src={track.attributes.attachments[0].url} type="audio/mpeg" />
      </audio>
    </li>
  );
}
