import ComponentHeader from "../components/ComponentHeader";
import ArtistCardSearchResults from "../components/ArtistCardSearchResults";
import { useNavigate } from "react-router-dom";

function SearchPage({ searchResults, searchTrack, onClose }) {
  let results = Object.values(searchResults);

  const handleClick = (uri) => {
    searchTrack(uri);
  };

  const renderTracks = () => {
    if (results[2] && results[2].items) {
      return results[2].items
        .filter((item) => item.name.length <= 25)
        .slice(0, 8)
        .map((item) => (
          <div key={item.id}>
            <ArtistCardSearchResults
              uri={item.uri}
              imgSrc={item.album?.images[0].url}
              title={item.name}
              artist={item.artists[0].name}
              className="px-2 py-8 w-52 w-full bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg hover:opacity-75 h-full "
              onClick={() => handleClick(item.uri)}
            />
          </div>
        ));
    } else {
      return null;
    }
  };

  const renderAlbums = () => {
    if (results[0] && results[0].items) {
      return results[0].items
        .filter((item) => item.name.length <= 20 && item.album_type === 'album')
        .slice(0, 3)
        .map((item) => (
          <div key={item.id} className="flex flex-col items-center h-full hover:cursor-pointer  justify-start">
            <img src={item.images[0].url} alt="user-pfp" className="aspect-square w-30 h-30 rounded"/>
            <p className={`py-4 text-sm text-center text-gray-600 font-semibold items-center display-inline dark:text-white`}>{item.name}</p>
          </div>
        ));
    } else {
      return null;
    }
  };

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
    onClose();
  };

  return (
    <div className="h-5/6 px-20 h-full" >
      <div style={{height: "85%"}}>
        <ComponentHeader className="pb-3 col-start-1 col-end-3 row-start-1 dark:bg-transparent" componentName="Search Results" buttonContent="Close" onClose={handleClose}/>
        <div className="flex flex-row gap-8	 w-full h-full" >
          <div style={{width: "70%"}} className="col-start-1 col-end-3 row-start-1 row-span-full grid grid-cols-[repeat(auto-fill,minmax(20%,1fr))] gap-10 " >
            {renderTracks(results)}
          </div>
          <div style={{width: "30%"}} className="col-start-3 col-end-4 row-start-1 flex flex-col justify-between" >
            <div style={{height: "48%"}} className="col-start-3 col-end-5 row-start-1 row-end-2 bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg px-6 py-5 flex flex-col hover:cursor-pointer ">
              <ComponentHeader className="py-2 dark:bg-transparent" componentName="Artists" buttonContent="See All" />
              <div className="flex flex-col items-start hover:cursor-pointer justify-center inline">
                {(results[1]?.items[0]?.images[0]?.url) ? (
                    <div className="flex flex-row items-center w-full justify-around	">
                      <img
                        src={results[1]?.items[0]?.images[0].url}
                        alt="user-pfp"
                        className="aspect-square w-36 h-36 rounded-full"
                      />
                      <p className="text-xl py-4 text-gray-600 font-semibold dark:text-white">
                        {results[1]?.items[0]?.name}
                      </p>
                    </div>
                  ) : (
                    <div className="col-span-full flex justify-center self-center pb-6 ">
                      <p className="text-4xl text-gray-400">No results found</p>
                    </div>
                  )}
              </div>
            </div> 
            <div style={{height: "44%"}} className="col-start-3 col-end-5 row-start-2 row-end-3 bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg px-6 py-5 flex flex-col hover:cursor-pointer">
              <ComponentHeader className="py-2" componentName="Albums" buttonContent="See All"/>
                <div className="flex flex-row gap-7 h-full hover:cursor-pointer justify-center grid grid-cols-3 "> 
                  {renderAlbums(results).length === 0 
                  ? <div className="col-span-full flex justify-center items-center pb-6 ">
                      <p className="text-4xl text-gray-400">No results found </p>
                    </div>
                  : renderAlbums(results)}
                </div>
            </div>    
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchPage;

