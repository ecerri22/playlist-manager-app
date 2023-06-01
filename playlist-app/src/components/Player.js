import { TokenContext } from "../context/TokenProvider";
import { useContext, useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function Player({ selectedUri }) {
  
    const { token } = useContext(TokenContext);
    const [play, setPlay] = useState(false);
  
    useEffect(() => setPlay(true), [selectedUri]);
  
    if (!token) return null;
  
    const playerStyles = {
        activeColor: '#818cf8',
        altColor: '#ffffff',
        bgColor: '#818cf8',
        color: '#fafafa',
        errorColor: '#ff0000',
        height: 80,
        loaderColor: '#ffffff',
        loaderSize: 32,
        sliderColor: '#ffffff',
        sliderHandleBorderRadius: 10,
        sliderHandleColor: '#ffffff',
        sliderHeight: 5,
        sliderTrackBorderRadius: 5,
        sliderTrackColor: '#4b5563',
        trackArtistColor: '#ffffff',
        trackNameColor: '#ffffff'
  };

  return (
    <div className="-mt-8">
        <SpotifyPlayer
        token={token}
        showSaveIcon
        callback={(state) => {
            if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={selectedUri ? [selectedUri] : []}
        styles={playerStyles}
        />
    </div>
  );

}
  
  export default Player;
