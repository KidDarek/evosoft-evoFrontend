import { Avatar, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import PurchaseHistoryButton from "./PurchaseHistoryButton";
import { UserContext } from "../../context-providers/UserContext";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const StyledBrightPurchaseHistoryDiv = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: "#00e6ac",
  color: "white",
  textAlign: "center",
  paddingTop: "50px",
  paddingBottom: "50px",
  "@keyframes brightdivanimation": {
    from: {
      transform: "translateX(100%)",
      opacity: "0",
    },
    to: {
      transform: "translateX(0)",
      opacity: "1",
    },
  },
  animation: "brightdivanimation 0.5s 1 ease",
  position: "static",
});

const StyledDarkPurchaseHistoryDiv = styled("div")({
  width: "100%",
  height: "100%",
  backgroundColor: "#00b386",
  color: "white",
  textAlign: "center",
  paddingTop: "50px",
  paddingBottom: "50px",
  "@keyframes darkdivanimation": {
    from: {
      transform: "translateX(-100%)",
      opacity: "0",
    },
    to: {
      transform: "translateX(0)",
      opacity: "1",
    },
  },
  animation: "darkdivanimation 0.5s 1 ease",
  position: "static",
});

const StyledTable = styled("table")({
  width: "25%",
  height: "128px",
  background: "#00cc99",
  borderRadius: "15px",
  color: "white",
  padding: "20px 20px 20px 24px",
  fontWeight: "bold",
});

const StyledPurchaseHistory = styled("div")({
  width: "80%",
  height: "100%",
  backgroundColor: "#00cc99",
});

const ProfilePage = () => {
  const [VisiblePurchaseHistory, setPurchaseHistory] = useState(false);

  const { getLoggedInUser } = useContext(UserContext);

  const loggedInUser = getLoggedInUser();

  if (!loggedInUser) {
    return null; // or any appropriate UI when the user is not logged in
  }

  return (
    <>
      <StyledPageDiv>
        <StyledTable>
          <tbody>
            <tr>
              <td rowSpan="5">
                <Avatar
                  sx={{
                    width: 128,
                    height: 128,
                    bgcolor: "#ff0055",
                    fontSize: 100,
                  }}
                >
                  {loggedInUser.name[0].toUpperCase()}
                </Avatar>
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{loggedInUser.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{loggedInUser.email}</td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>{loggedInUser.role}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>active</td>
            </tr>
          </tbody>
        </StyledTable>
      </StyledPageDiv>
      <StyledPageDiv></StyledPageDiv>
    </>
  );
};

export default ProfilePage;
