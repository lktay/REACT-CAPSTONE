import React from "react";
import { Stack, Typography } from "@mui/material";

const RenderTracks = ({ item }) => {
  const albumID = `https://open.spotify.com/album/${item.id}`;
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <div>
        <a href={albumID}>
          <img
            src={item.album.images[2].url}
            alt={item.name}
          />
        </a>
      </div>
      <Typography variant="body1">
        {item.name} by {item.artists[0].name}
      </Typography>
    </Stack>
  );
};

export default RenderTracks;
