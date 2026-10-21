import { clsx } from "clsx";
import { type TrackListItemOutput } from "../dal/api.ts";
import styles from "TrackItem.module.css";

type Props = {
  track: TrackListItemOutput;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function TrackItem({ track, isSelected, onSelect }: Props) {
  const handleClick = () => onSelect(track.id);

  return (
    <li
      className={clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
      })}
      key={track.id}
    >
      <h3 onClick={handleClick}>{track.attributes.title}</h3>
      <audio controls>
        <source src={track.attributes.attachments[0].url} type="audio/mpeg" />
      </audio>
    </li>
  );
}
