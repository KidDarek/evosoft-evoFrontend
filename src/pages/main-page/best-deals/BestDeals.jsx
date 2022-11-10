import { Grid, Box } from "@mui/material";
import React from "react";
import Card from "./Card";

const BestDealsPage = () => {
  return (
    <>
      <Box paddingLeft="100px" paddingRight="100px">
        <h1>Best deals of the week:</h1>
        <h2>Computers:</h2>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card
              title="Wooden PC"
              imageUri="https://i.imgur.com/sJWUwiO.jpeg"
              body="Lorem Ipsum"
              price="$1000"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Card
              title="Wooden PC"
              imageUri="https://i.imgur.com/sJWUwiO.jpeg"
              body="Lorem Ipsum"
              price="$1000"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Card
              title="Wooden PC"
              imageUri="https://i.imgur.com/sJWUwiO.jpeg"
              body="Lorem Ipsum"
              price="$1000"
            />
          </Grid>
        </Grid>
        <h2>Smartphones:</h2>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card
              title="iPhone 14"
              imageUri="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960"
              body="Lorem Ipsum"
              price="$1000"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Card
              title="iPhone 14"
              imageUri="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960"
              body="Lorem Ipsum"
              price="$1000"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Card
              title="iPhone 14"
              imageUri="https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960"
              body="Lorem Ipsum"
              price="$1000"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BestDealsPage;
