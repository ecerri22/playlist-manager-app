import SongBar from "./SongBar";
import ComponentHeader from "./ComponentHeader";
import { TokenContext } from "../context/TokenProvider";
import { useContext, useState, useEffect } from "react";
import { getTopTracks } from "../api";
import "tailwind-scrollbar";

function TopCharts({ playingTrack  }){
    const { token } = useContext(TokenContext);
    const [featured, setfeatured] = useState(null);

    useEffect(() => {
        getTopTracks(token)
            .then(response => {
                setfeatured(response);
            })
            .catch(error => {
                console.error(error);
                throw new Error("Could not get data");
            });
    }, [token]);

    console.log(featured);

    const renderTracks = featured?.tracks?.items.filter((track) => track.track.name.length < 15).slice(0, 30).map((track, index) => {
        return <SongBar key={track.track.id} track={track} index={index + 1} playingTrack={playingTrack}/>
    })

    return (
        <div  className="bg-white rounded-md px-6 h-4/5 dark:bg-neutral-800 pb-4">
            <ComponentHeader className="pt-5" componentName="Top Charts" buttonContent="See All"/>
            <div className="my-2 pb-4 h-[calc(100%-3rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-neutral-100 dark:scrollbar-track-neutral-700" >
               {renderTracks}
            </div>
        </div>
    )
}

export default TopCharts;