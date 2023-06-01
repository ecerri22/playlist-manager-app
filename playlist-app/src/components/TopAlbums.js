import ArtistCard from "./ArtistCard";
import ComponentHeader from "../components/ComponentHeader";
import { TokenContext } from "../context/TokenProvider";
import { useContext, useEffect , useState} from "react";
import { getNewReleases } from "../api";

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

    const renderAbums = newRelease?.albums?.items.filter((album) => album.name.length < 30).map((album) => {
        return <ArtistCard key={album.id} imgSrc={album.images[0].url} title={album.name} artist={album.artists[0].name} className="px-4 w-60"/>
    })

    return (
        <div className="bg-white rounded-md px-6 h-4/5 dark:bg-neutral-800">
            <ComponentHeader className="pt-6 " componentName="New Album Releases" buttonContent="See All"/>
            <div className="flex flex-row pt-2">
                {renderAbums}
            </div>
        </div>
    )
}

export default TopAlbums;


