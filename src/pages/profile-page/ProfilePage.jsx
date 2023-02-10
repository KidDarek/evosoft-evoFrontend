import { Avatar, styled } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../../db";

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  marginTop: "20px",
  marginBottom: "15px",
  gap: "25px",
});

const StyledTable = styled("table")({
  width: "25%",
  height: "128px",
  background: "#00cc99",
  borderRadius: "15px",
});

const ProfilePage = () => {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <StyledPageDiv>
        <Avatar
          sx={{ width: 128, height: 128, bgcolor: "#ff0055", fontSize: 100 }}
        >
          {users[id - 1].name[0].toUpperCase()}
        </Avatar>
        <StyledTable>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{users[id - 1].name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{users[id - 1].email}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>{users[id - 1].role}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>active</td>
            </tr>
          </tbody>
        </StyledTable>
      </StyledPageDiv>
    </div>
  );
};

export default ProfilePage;
