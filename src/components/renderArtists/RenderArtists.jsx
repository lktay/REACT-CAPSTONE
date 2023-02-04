import React from "react";

const RenderArtists = ({ item }) => {
  const artistID = `https://open.spotify.com/artist/${item.id}`;
  return (
    <div>
      <h2>{item.name}</h2>
      {item.images.length ? (
        <a href={artistID}>
          <img
            src={item.images[0].url}
            alt={item.name}
          />
        </a>
      ) : (
        <div>No Image</div>
      )}
    </div>
  );
};

export default RenderArtists;
