import ArtistCard from "./ArtistCard";
import ComponentHeader from "../components/ComponentHeader";
import { TokenContext } from "../context/TokenProvider";
import { useContext, useEffect , useState} from "react";
import { getNewReleases } from "../api";

import Filter from 'bad-words'; // Import bad-words library

function TopAlbums(){

    const { token } = useContext(TokenContext);
    const [newRelease, setNewRelease] = useState(null);

    useEffect(() => {
        getNewReleases(token)
            .then(response => {
                setNewRelease(response);
            })
            .catch(error => {
                throw new Error("Could not get data")
            });
    }, [token]);

    const filter = new Filter();

    const renderAlbums = newRelease?.albums?.items
    .filter((album) => {
      const albumName = album.name;
      return (
        albumName.length < 15 && 
        !filter.isProfane(albumName) && 
        albumName.indexOf('*') === -1 // Exclude titles containing '*'
      );
    })
    .map((album) => {
      return (
        <ArtistCard
          key={album.id}
          imgSrc={album.images[0].url}
          title={album.name}
          artist={album.artists[0].name}
          className="px-4 w-60"
        />
      );
    });

    return (
        <div className="bg-white rounded-md px-6 h-4/5 dark:bg-neutral-800">
            <ComponentHeader className="pt-5 " componentName="New Releases" buttonContent="See All"/>
            <div className="flex flex-row">
                {renderAlbums}
            </div>
        </div>
    )
}

export default TopAlbums;


