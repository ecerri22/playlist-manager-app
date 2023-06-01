import SlideShow from "../components/SlideShow";
import TopAlbums from "../components/TopAlbums";
import TopCharts from "../components/TopCharts";

function HomePage({playingTrack}){
    return(
        <div className="grid grid-cols-3 grid-rows-2 h-4/5 gap-10 px-20">
            <div className="col-span-full">
                <div>  
                    <SlideShow playingTrack={playingTrack}/>
                </div>
            </div>
            <div className="col-start-1 col-end-3 row-start-2 row-end-3 h-full ">
                    <TopAlbums/>
            </div>
            <div className="col-start-3 row-start-2 h-full">
                <TopCharts playingTrack={playingTrack}/>
            </div>
        </div>
    )
}

export default HomePage;