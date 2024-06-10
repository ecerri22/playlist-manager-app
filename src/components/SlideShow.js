import { GoHeart } from "react-icons/go";
import { getTopTracks } from "../api";
import { TokenContext } from "../context/TokenProvider";
import { useContext, useState, useEffect } from "react";

function SlideShow({ playingTrack }) {
  
  const { token } = useContext(TokenContext);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    getTopTracks(token)
      .then(response => {
        setFeatured(response);
      })
      .catch(error => {
        throw new Error("Could not get data");
      });
  }, [token]);

  const getShortTrack = () => {
    if (featured && featured.tracks.items.length > 0) {
      return featured.tracks.items.find(
        item => item.track.name.length <= 15 && !/\d/.test(item.track.name)
      );
    }
    return null;
  };

  const shortTrack = getShortTrack();

  const handleSongBarClick = (uri) => {
    playingTrack(uri);
  };

  const popularityConvert = (popularity) => {
    if (popularity % 10 === 1) {
      return popularity + "st";
    } else if (popularity % 10 === 2) {
      return popularity + "nd";
    } else if (popularity % 10 === 3) {
      return popularity + "rd";
    } else {
      return popularity + "th";
    }
  }

  return (
    <div className="flex justify-between">
      <div>
        <div className="flex flex-row justify-between pt-4">
          <p className="text-lg font-semibold text-gray-600 dark:text-white">Trending Now Hits</p>
        </div>
        <div className="flex flex-col my-4">
          {shortTrack && (
            <div>
              <p className="text-6xl font-bold text-gray-600 py-5 dark:text-white">
                {shortTrack.track.name}
              </p>
              <div className="flex flex-row">
                <p className="text-xl font-bold text-gray-600 pr-8 dark:text-white">
                  {shortTrack.track.artists[0].name}
                </p>
                <p className="text-xl text-gray-400 dark:text-white">{popularityConvert(shortTrack.track.popularity)} on Popularity</p>
              </div>
              <div className="flex flex-row py-6 items-center">
                <button className="mr-8 px-8 py-2 border rounded-xl bg-indigo-500 text-white hover:bg-indigo-400 dark:border-transparent"  onClick={() => handleSongBarClick(shortTrack.track.uri)}>
                  Listen Now
                </button>
                <button className="border p-3 rounded-full border-gray-300 hover:bg-gray-200">
                  <GoHeart className="text-indigo-500 " />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
     <div className="bg-cover bg-center bg-no-repeat w-3/5 h-72 " style={{ backgroundImage: `linear-gradient(to right, rgb(249, 250, 251), rgba(0, 0, 0, 0)), url(${shortTrack?.track?.album?.images[0]?.url || ''})` }}></div> 
      </div>

  )

}

export default SlideShow;
