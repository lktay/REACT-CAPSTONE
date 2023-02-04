import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RenderArtists from "./components/renderArtists/RenderArtists";
import RenderAlbums from "./components/renderAlbums/RenderAlbums";
import RenderTracks from "./components/renderTracks/RenderTracks";

function App() {
  const CLIENT_ID = "4081228661664398aa13c58607ba9675";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [searchType, setSearchType] = useState("artist");
  const [errorVisibility, setErrorMessage] = useState("hidden");
  const [data, setData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loadedType, setLoadedType] = useState();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  const searchTerm = async (e) => {
    if (searchKey !== "") {
      setErrorMessage("hidden");
      e.preventDefault();
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: searchType,
        },
      });
      console.log(data);
      if (searchType === "artist") {
        setData(data.artists.items);
      } else if (searchType === "album") {
        setData(data.albums.items);
      } else {
        setData(data.tracks.items);
      }
      setHasSearched("true");
      setLoadedType(searchType);
    } else {
      setErrorMessage("visible");
      setHasSearched("false");
    }
  };
  const getComponent = (item) => {
    if (loadedType === "artist") {
      return (
        <RenderArtists
          item={item}
          key={item.id}
        />
      );
    } else if (loadedType === "album") {
      return (
        <RenderAlbums
          item={item}
          key={item.id}
        />
      );
    } else if (loadedType === "track") {
      return (
        <RenderTracks
          item={item}
          key={item.id}
        />
      );
    }
  };

  return (
    <div>
      <h1>Spotify API</h1>

      {token ? (
        <div>
          <h2>searching by {searchType}</h2>
          <form onSubmit={searchTerm}>
            <input
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <select
              value={searchType}
              id="search-type"
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option
                value="artist"
                defaultChecked
              >
                Artist
              </option>
              <option value="album">Album</option>
              <option value="track">Track</option>
            </select>
            <button type={"submit"}>search</button>
          </form>
        </div>
      ) : (
        <h2>Please login!</h2>
      )}
      {hasSearched ? data.map((item) => getComponent(item)) : <></>}
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <div>
          <p className={errorVisibility}>Please enter a search term!</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
