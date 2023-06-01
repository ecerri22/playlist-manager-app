import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Player from "./components/Player";
import SearchPage from "./pages/SearchPage";
import { useContext, useState } from "react";
import { TokenContext } from "./context/TokenProvider";
import { searchArtists } from "./api";

function App() {
  const { token } = useContext(TokenContext);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (term) => {
    try {
      let results = await searchArtists(term, token);
      setSearchResults(results);
      setShowSearchResults(true);
    } catch (error) {
      console.log("Error occurred during search:", error);
    }
  };

  const [selectedUri, setSelectedUri] = useState(null);

  const handleCloseSearch = () => {
    setShowSearchResults(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!token && <Login />}

        {token && (
          <div className="flex w-screen h-screen">
            <div>
              <Sidebar></Sidebar>
            </div>
            <div className={`flex flex-col w-full bg-gradient-to-t from-gray-100 to-zinc-50 dark:from-neutral-900 dark:to-neutral-900`}>
              <Navigation onSearch={handleSearch} />

              {showSearchResults ? (
                <SearchPage searchResults={searchResults} searchTrack={setSelectedUri}  onClose={handleCloseSearch}/>
              ) : (
                <HomePage playingTrack={setSelectedUri} />
              )}

              <Player selectedUri={selectedUri}/>

            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
