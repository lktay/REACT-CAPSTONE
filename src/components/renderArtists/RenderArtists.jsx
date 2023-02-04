import React from "react";
import { Stack } from "@mui/system";

const RenderArtists = ({ item }) => {
  const artistID = `https://open.spotify.com/artist/${item.id}`;
  return (
    <Stack
      justifyContent="space-around"
      alignItems="center"
      direction="column"
      marginBottom={6}
    >
      <h2>{item.name}</h2>
      {item.images.length ? (
        <a href={artistID}>
          <img
            height="400px"
            src={item.images[1].url}
            alt={item.name}
          />
        </a>
      ) : (
        <div>No Image</div>
      )}
    </Stack>
  );
};

export default RenderArtists;
