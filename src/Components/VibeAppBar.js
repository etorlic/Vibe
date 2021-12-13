import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import { deepOrange, deepPurple } from "@mui/material/colors"
import { Link } from "react-router-dom"
// import { Link } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"

const pages = ["Products", "Pricing", "Blog"]
const settings = ["Profile", "Logout"]

const VibeAppBar = props => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppBar position="static" style={{ background: "" }}>
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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="Home" component={Link} to="/home">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              {props.loggedIn ? (
                <MenuItem key="DisplayMovies" component={Link} to="/DisplayMovie">
                  <Typography textAlign="center">Display Movies</Typography>
                </MenuItem>
              ) : null}
              {props.loggedIn ? (
                <MenuItem key="EditMovie" component={Link} to="/EditMovie">
                  <Typography textAlign="center">Edit Streaming Service</Typography>
                </MenuItem>
              ) : null}
              <MenuItem key="About" component={Link} to="/About">
                <Typography textAlign="center">About</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/home"
              key="Home"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            {props.loggedIn ? (
              <Button
                key="DisplayMovies"
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/DisplayMovie"
              >
                Display Movie
              </Button>
            ) : null}
            {props.loggedIn ? (
              <Button
                key="EditGenre"
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/EditGenre"
              >
                Select Genre
              </Button>
            ) : null}
            {props.loggedIn ? (
              <Button
                key="EditMovie"
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/EditMovie"
              >
                Edit Streaming Services
              </Button>
            ) : null}
            <Button
              key="About"
              sx={{ my: 2, color: "white", display: "block" }}
              component={Link}
              to="/About"
            >
              About
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
                <MenuItem component={Link} key="logout" onClick={props.logout} to="/">
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              <Tooltip title="Login">
                <Button sx={{ p: 0, color: "white" }} onClick={props.login}>
                  Login
                </Button>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default VibeAppBar
