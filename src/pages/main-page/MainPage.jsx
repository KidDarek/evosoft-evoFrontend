import { styled } from "@mui/system";
import React from "react";
import Banner from "./banner/Banner";
import WrappedBestDealsPage from "./best-deals/BestDeals";

const StlyedMainPageDiv = styled("div")({
  backgroundColor: "#00EFB3",
});

const MainPage = (props) => {
  return (
    <StlyedMainPageDiv>
      <Banner />
      <WrappedBestDealsPage />
    </StlyedMainPageDiv>
  );
};

export default MainPage;
