import { Avatar, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import { users } from "../../DataBaseLoader";
import React, { useState } from "react";
import PurchaseHistoryButton from "./PurchaseHistoryButton";

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
  position: "static"
})

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
  position: "static"
})


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
})

const ProfilePage = () => {
  const [VisiblePurchaseHistory, setPurchaseHistory] = useState(false);

  const params = useParams();
  const id = params.id;
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
                  {users[id - 1].name[0].toUpperCase()}
                </Avatar>
              </td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{users[id - 1].name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{users[id - 1].email}</td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>{users[id - 1].role}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>active</td>
            </tr>
          </tbody>
        </StyledTable>
      </StyledPageDiv>
      <StyledPageDiv>
        {!VisiblePurchaseHistory && <PurchaseHistoryButton setPurchaseHistory={setPurchaseHistory}></PurchaseHistoryButton>}
        {VisiblePurchaseHistory &&
          <StyledPurchaseHistory>
            <StyledDarkPurchaseHistoryDiv> Product 1 </StyledDarkPurchaseHistoryDiv>
            <StyledBrightPurchaseHistoryDiv> Product 2 </StyledBrightPurchaseHistoryDiv>
            <StyledDarkPurchaseHistoryDiv> Product 3 </StyledDarkPurchaseHistoryDiv>
            <StyledBrightPurchaseHistoryDiv> Product 4 </StyledBrightPurchaseHistoryDiv>
          </StyledPurchaseHistory>}
      </StyledPageDiv>
    </>
  );
};

export default ProfilePage;
