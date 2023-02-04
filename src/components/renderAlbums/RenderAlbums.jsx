import React from "react";

const RenderAlbums = ({ item }) => {
  const albumID = `https://open.spotify.com/album/${item.id}`;
  return (
    <div>
      <div>
        {item.images.length ? (
          <a href={albumID}>
            <img
              src={item.images[0].url}
              alt={item.name}
            />
          </a>
        ) : (
          <div>No Image</div>
        )}
      </div>
      <div>
        <h2>{item.name}</h2>
        <p>Artist: {item.artists[0].name}</p>
        <p>CD type: {item.type}</p>
        <p>Release Date: {item.release_date}</p>
        <p>Track: {item.total_tracks}</p>
      </div>
    </div>
  );
};

export default RenderAlbums;
