import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { deepOrange, deepPurple } from "@mui/material/colors";
import LoginIcon from "@mui/icons-material/Login";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Logout"];

const VibeAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" style={{ background: "#ff000052" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            VIBE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button key="Home" sx={{ my: 2, color: "white", display: "block" }}>
              Home
            </Button>
            {props.loggedIn ? (
              <Button
                key="About"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Create Playlist
              </Button>
            ) : null}

            <Button
              key="About"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
            <Button
              key="History"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              History
            </Button>
          </Box>
          {props.loggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="editProfile">
                  <Typography textAlign="center">Edit Profile</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick={props.logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              <Tooltip title="Login">
                <Button sx={{ p: 0 }} onClick={props.login}>
                  Login
                </Button>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default VibeAppBar;
