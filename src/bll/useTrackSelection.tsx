import { useState } from "react";

export const useTrackSelection = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null): void => {
    setSelectedTrackId(id);
  };
  return { selectedTrackId, handleTrackSelect };
};
