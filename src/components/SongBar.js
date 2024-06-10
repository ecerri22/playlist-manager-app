function SongBar({track, index, playingTrack }){
    
    const totalSeconds = Math.floor(track.track.duration_ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.ceil(totalSeconds % 60);

    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    const handleSongBarClick = (uri) => {
        playingTrack(uri);
    };
    
    return (
        <div className="flex flex-row justify-between justify-center items-center py-4 bg-white rounded-md hover:bg-gray-100 px-2 dark:bg-neutral-800 hover:cursor-pointer" onClick={() => handleSongBarClick(track.track.uri)}>
            <div className="flex flex-row justify-center items-center ">
                <p className="text-sm text-gray-400 dark:text-white">{index < 9 ? "0" + index : index}</p>
                <img src={track.track.album.images[2].url} alt="user-pfp" className="aspect-square w-12 h-12 rounded-lg mx-4"></img>
                <div className="flex flex-col items-start">
                     <p className="text-sm text-gray-600 font-semibold dark:text-white">{track.track.name}</p>
                    <p className="text-xs text-gray-400 dark:text-white">{track.track.artists[0].name}</p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center w-1/4 justify-evenly" >
                <p className="text-sm text-gray-400 dark:text-white">{formattedDuration}</p>
            </div>
        </div>
    )
}

export default SongBar;