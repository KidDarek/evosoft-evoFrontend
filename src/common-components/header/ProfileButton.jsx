import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context-providers/UserContext";

const ProfileButton = () => {
  const navigate = useNavigate();

  const navigateToProfilePage = () => {
    handleClose();
    navigate(`/Profile`);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const { getLoggedInUser, logoutUser } = useContext(UserContext);

  const loggedInUser = getLoggedInUser();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    logoutUser();
    handleClose();
    navigate("/");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ width: 32, height: 32, bgcolor: "#ff0055" }}>
          {loggedInUser.name[0].toUpperCase()}
        </Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={navigateToProfilePage}>Profile</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileButton;
