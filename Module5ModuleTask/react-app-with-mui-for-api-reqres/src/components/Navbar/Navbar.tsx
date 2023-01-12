import React, { FC, ReactElement, useContext } from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { AppStoreContext } from "../../App";

const Navbar: FC = observer((): ReactElement => {
  const appStore = useContext(AppStoreContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <span style={{ color: "white" }}>A-LEVEL COURSE</span>
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
              <MenuIcon style={{ color: "white" }} />
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
              {routes.map(
                (page) =>
                  !!page.enabled && (
                    <Link
                      key={page.key}
                      component={NavLink}
                      to={page.path}
                      color="black"
                      underline="none"
                      variant="button"
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </MenuItem>
                    </Link>
                  )
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <span style={{ color: "white" }}>A-LEVEL COURSE</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              {routes.map(
                (page) =>
                  !!page.enabled && (
                    <Link
                      key={page.key}
                      component={NavLink}
                      to={page.path}
                      color="white"
                      underline="none"
                      variant="button"
                      sx={{ fontSize: "large", marginLeft: "2rem" }}
                    >
                      {page.title}
                    </Link>
                  )
              )}
            </Box>
          </Box>
          {!!appStore.authStore.token && (
            <Link
              component={NavLink}
              to={"/login"}
              className="mt-3 mb-3 cursor-pointer material-icons"
              color="white"
              underline="none"
              variant="button"
              sx={{ fontSize: "large", marginLeft: "2rem" }}
              onClick={() => (appStore.authStore.token = "")}
            >
              <LogoutIcon />
            </Link>
          )}
        </Toolbar>
      </Container>
    </Box>
  );
});

export default Navbar;
