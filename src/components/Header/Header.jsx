import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";


function Header() {
  const pages = ["Home", "News", "Courses", "E-book", "Contact Us"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
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
    <>
      <Box className={styles.appHeader}>
        <Stack
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignContent={"center"}
        >
          <Typography sx={{ color: "white" }}>العربية</Typography>
        </Stack>
      </Box>
      <Box className={styles.logoContainer}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Image
            src={"./images/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"}
            alt="img"
            width={100}
            height={100}
          />
          <Typography sx={{ color: "white" }}>Sign Up</Typography>
        </Stack>
      </Box>
      <AppBar position="static" sx={{ background: "#1e1e1e" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={() => router.push(`/${page}`)}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: index === 0 ? "#55E748" : "white",
                        fontWeight: 700,
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => router.push(`/${page}`)}
                  sx={{
                    my: 2,
                    display: "block",
                    color: index === 0 ? "#55E748" : "white",
                    fontWeight: 700,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0, color: "white" }}>
                  <ShoppingCartIcon /> cart
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
