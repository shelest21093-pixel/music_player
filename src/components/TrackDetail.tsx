import { useState, useEffect } from "react";
import  { API_KEY } from '../../api-key.js';

function TrackDetail({selectedTrackId}) {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const trackId = selectedTrackId;

    useEffect(
        () => {
        if(!trackId) {
            return;
        }

        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            'api-key' : API_KEY
        }
        }).then(res => res.json())
        .then(json => setSelectedTrack(json.data))
    }, [trackId])

    return (
        <>
          <h2>Details</h2>
          {trackId === null ? 'Track is not selected' :
            selectedTrack === null ? 'Loading track details' :
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
            </div>
          }
        </>
    )
}

export default TrackDetail;