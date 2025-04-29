import React, { useState } from "react";
import CallIcon from '@mui/icons-material/Call';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  CssBaseline,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import zealous from "../Images/Zealous.png";
import useDisableCopyPaste from "./useDisableCopyPaste";

function Navigation() {
  useDisableCopyPaste();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  const handleNavClick = (to, isRoute = false) => {
    if (isRoute) {
      navigate(to);
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setDrawerOpen(false);
  };

  const navLinks = [
    { to: "home-section", label: "Home" },
    { to: "about-section", label: "About" },
    // { to: "clients-section", label: "Clients" },
    { to: "contacts-section", label: "Contact" },
    { to: "/verify", label: "Certificate Validation", isRoute: true },
    { to: "/compiler", label: "Compiler", isRoute: true },
  ];

  const submenuLinks = [
    { to: "services-section", label: "Services" },
    { to: "training-section", label: "Technology" },
    { to: "campus-section", label: "Campus" },
  ];

  const handleSubMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
  };

  const renderNavLinks = () => (
    <Box sx={{ display: "flex", alignItems: "center", gap: isSmallScreen ? 1 : 2 }}>
      {navLinks.map((link, index) => (
        link.isRoute ? (
          <a
            key={index}
            href={link.to}
            className="nav-link"
            style={{
              cursor: "pointer",
              color: "#0c83c8",
              textDecoration: "none",
              fontSize: isSmallScreen ? "0.9rem" : "1rem",
            }}
            onClick={() => {
              handleNavClick(link.to, true);
            }}
          >
            {link.label}
          </a>
        ) : (
          <ScrollLink
            key={index}
            to={link.to}
            duration={1000}
            className="nav-link"
            style={{
              cursor: "pointer",
              color: "#0c83c8",
              fontSize: isSmallScreen ? "0.9rem" : "1rem",
            }}
            spy={true}
            smooth={true}
            onClick={() => handleNavClick(link.to)}
          >
            {link.label}
          </ScrollLink>
        )
      ))}
      <Typography
        onClick={handleSubMenuOpen}
        style={{
          cursor: "pointer",
          color: "#0c83c8",
          display: "inline-flex",
          alignItems: "center",
          fontSize: isSmallScreen ? "0.9rem" : "1rem",
        }}
      >
        More <ArrowDropDownIcon />
      </Typography>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleSubMenuClose}
        MenuListProps={{
          style: { backgroundColor: "#ffffff", color: "#0c83c8" },
        }}
      >
        {submenuLinks.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.to}
            duration={1000}
            className="nav-link"
            style={{ cursor: "pointer", color: "#0c83c8" }}
            spy={true}
            smooth={true}
            onClick={() => {
              handleNavClick(link.to);
              handleSubMenuClose();
            }}
          >
            <MenuItem sx={{ backgroundColor: "#ffffff", color: "#0c83c8" }}>
              {link.label}
            </MenuItem>
          </ScrollLink>
        ))}
      </Menu>
    </Box>
  );

  const renderDrawerLinks = () => (
    <>
      {navLinks.map((link, index) => (
        link.isRoute ? (
          <a
            key={index}
            href={link.to}
            className="nav-link"
            style={{ cursor: "pointer", color: "#ffffff", textDecoration: "none" }}
            onClick={() => {
              handleNavClick(link.to, true);
            }}
          >
            <ListItem button sx={{ color: "#ffffff", cursor: "pointer" }}>
              <ListItemText primary={link.label} />
            </ListItem>
          </a>
        ) : (
          <ScrollLink
            key={index}
            to={link.to}
            duration={2000}
            className="nav-link"
            style={{ cursor: "pointer", color: "#ffffff" }}
            spy={true}
            smooth={true}
            onClick={() => handleNavClick(link.to)}
          >
            <ListItem button sx={{ color: "#ffffff", cursor: "pointer" }}>
              <ListItemText primary={link.label} />
            </ListItem>
          </ScrollLink>
        )
      ))}
      <ListItem button sx={{ color: "#ffffff", cursor: "pointer" }} onClick={handleSubMenuOpen}>
        <ListItemText primary="More" />
        <ArrowDropDownIcon />
      </ListItem>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleSubMenuClose}
        MenuListProps={{
          style: { backgroundColor: "#0c83c8", color: "#ffffff" },
        }}
      >
        {submenuLinks.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.to}
            duration={2000}
            className="nav-link"
            style={{ cursor: "pointer", color: "#ffffff" }}
            spy={true}
            smooth={true}
            onClick={() => {
              handleNavClick(link.to);
              handleSubMenuClose();
            }}
          >
            <MenuItem sx={{ backgroundColor: "#0c83c8", color: "#ffffff" }}>
              {link.label}
            </MenuItem>
          </ScrollLink>
        ))}
      </Menu>
    </>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="custom-navbar"
        sx={{ backgroundColor: "#ffffff", zIndex: theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 } }}>
              <img
                src={zealous}
                onClick={scrollToTop}
                style={{
                  cursor: "pointer",
                  maxHeight: isSmallScreen ? 60 : 90,
                }}
                alt="Zealous Logo"
              />
              <Box sx={{ display: "flex", alignItems: "center", color: "#fc7a46" }}>
                <CallIcon fontSize={isSmallScreen ? "small" : "medium"} />
                <Typography sx={{ ml: 1, fontSize: isSmallScreen ? "0.9rem" : "1rem" }}>
                  +91 95973 34782
                </Typography>
              </Box>
            </Box>
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: "#0c83c8" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              renderNavLinks()
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#0c83c8", width: isSmallScreen ? 200 : 250 },
        }}
      >
        <div
          style={{
            width: isSmallScreen ? 200 : 250,
            paddingTop: isSmallScreen ? "120px" : "154px",
          }}
        >
          <List>
            {renderDrawerLinks()}
          </List>
        </div>
      </Drawer>
      <Toolbar />
    </>
  );
}

export default Navigation;