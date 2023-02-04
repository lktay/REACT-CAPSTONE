import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import "./RenderTracks.css";

const RenderTracks = ({ item }) => {
  const albumID = `https://open.spotify.com/album/${item.id}`;
  return (
    <div className="container">
      <Stack
        justifyContent="space-around"
        alignItems="center"
        direction="row"
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        spacing={5}
      >
        <div>
          <a href={albumID}>
            <img
              src={item.album.images[2].url}
              alt={item.name}
            />
          </a>
        </div>
        <Typography
          sx={{ height: "min-content", width: "350px" }}
          variant="body1"
        >
          {item.name} by {item.artists[0].name}
        </Typography>
      </Stack>
    </div>
  );
};

export default RenderTracks;
