import React from "react";
import { Stack, Divider } from "@mui/material";

const RenderAlbums = ({ item }) => {
  const albumID = `https://open.spotify.com/album/${item.id}`;
  return (
    <Stack
      justifyContent="space-around"
      alignItems="center"
      direction="row"
      marginBottom={3}
      divider={
        <Divider
          orientation="vertical"
          flexItem
        />
      }
    >
      {item.images.length ? (
        <a href={albumID}>
          <img
            width="300px"
            src={item.images[1].url}
            alt={item.name}
          />
        </a>
      ) : (
        <div>No Image</div>
      )}
      <Stack width={350}>
        <h2>{item.name}</h2>
        <p>Artist: {item.artists[0].name}</p>
        <p>CD type: {item.type}</p>
        <p>Release Date: {item.release_date}</p>
        <p>Track: {item.total_tracks}</p>
      </Stack>
    </Stack>
  );
};

export default RenderAlbums;
