import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
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
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const location = useLocation();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [phoneMenuAnchorEl, setPhoneMenuAnchorEl] = useState(null);

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

  const handlePhoneMenuOpen = (event) => {
    setPhoneMenuAnchorEl(event.currentTarget);
  };

  const handlePhoneMenuClose = () => {
    setPhoneMenuAnchorEl(null);
  };

  const navLinks = [
    { to: "home-section", label: "Home" },
    { to: "about-section", label: "About" },
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 1.5, md: 2 },
        flexWrap: "wrap",
      }}
    >
      {navLinks.map((link, index) =>
        link.isRoute ? (
          <a
            key={index}
            href={link.to}
            className="nav-link"
            style={{
              cursor: "pointer",
              color: "#0c83c8",
              textDecoration: "none",
              fontSize: isSmallScreen ? "0.85rem" : isMobile ? "0.9rem" : "1rem",
              padding: "0.5rem",
            }}
            onClick={() => handleNavClick(link.to, true)}
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
              fontSize: isSmallScreen ? "0.85rem" : isMobile ? "0.9rem" : "1rem",
              padding: "0.5rem",
            }}
            spy={true}
            smooth={true}
            onClick={() => handleNavClick(link.to)}
          >
            {link.label}
          </ScrollLink>
        )
      )}
      <Typography
        onClick={handleSubMenuOpen}
        style={{
          cursor: "pointer",
          color: "#0c83c8",
          display: "inline-flex",
          alignItems: "center",
          fontSize: isSmallScreen ? "0.85rem" : isMobile ? "0.9rem" : "1rem",
          padding: "0.5rem",
        }}
      >
        More <ArrowDropDownIcon fontSize={isSmallScreen ? "small" : "medium"} />
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
            <MenuItem sx={{ backgroundColor: "#ffffff", color: "#0c83c8", fontSize: isSmallScreen ? "0.85rem" : "1rem" }}>
              {link.label}
            </MenuItem>
          </ScrollLink>
        ))}
      </Menu>
    </Box>
  );

  const renderDrawerLinks = () => (
    <List>
      {navLinks.map((link, index) =>
        link.isRoute ? (
          <a
            key={index}
            href={link.to}
            className="nav-link"
            style={{ cursor: "pointer", color: "#ffffff", textDecoration: "none" }}
            onClick={() => handleNavClick(link.to, true)}
          >
            <ListItem button sx={{ color: "#ffffff", cursor: "pointer" }}>
              <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: isSmallScreen ? "0.9rem" : "1rem" }} />
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
              <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: isSmallScreen ? "0.9rem" : "1rem" }} />
            </ListItem>
          </ScrollLink>
        )
      )}
      <ListItem button sx={{ color: "#ffffff", cursor: "pointer" }} onClick={handleSubMenuOpen}>
        <ListItemText primary="More" primaryTypographyProps={{ fontSize: isSmallScreen ? "0.9rem" : "1rem" }} />
        <ArrowDropDownIcon fontSize={isSmallScreen ? "small" : "medium"} />
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
            <MenuItem sx={{ backgroundColor: "#0c83c8", color: "#ffffff", fontSize: isSmallScreen ? "0.85rem" : "1rem" }}>
              {link.label}
            </MenuItem>
          </ScrollLink>
        ))}
      </Menu>
    </List>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="custom-navbar"
        sx={{ backgroundColor: "#ffffff", zIndex: theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              justifyContent: "space-between",
              py: { xs: 2, sm: 1 },
              minHeight: { xs: 110, sm: 80, md: 90 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "center" },
                gap: { xs: 1, sm: 2 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  alignItems: { xs: "center", sm: "center" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: { xs: 1, sm: 2 },
                  width: { xs: "100%", sm: "auto" },
                  ml: { md: 3 }, // Shift right on large screens
                }}
              >
                <img
                  src={zealous}
                  onClick={scrollToTop}
                  style={{
                    cursor: "pointer",
                    maxHeight: isExtraSmallScreen ? 40 : isSmallScreen ? 50 : 60,
                    maxWidth: "100%",
                  }}
                  alt="Zealous Logo"
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fc7a46",
                    mb: { xs: 1, sm: 0 },
                  }}
                >
                  <CallIcon fontSize={isSmallScreen ? "small" : "medium"} />
                  <Typography
                    onClick={handlePhoneMenuOpen}
                    sx={{
                      ml: 1,
                      fontSize: isExtraSmallScreen ? "0.8rem" : isSmallScreen ? "0.9rem" : "1rem",
                      color: "#fc7a46",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    +91 95973 34782
                  </Typography>
                  <Menu
                    anchorEl={phoneMenuAnchorEl}
                    open={Boolean(phoneMenuAnchorEl)}
                    onClose={handlePhoneMenuClose}
                    MenuListProps={{
                      style: { backgroundColor: "#ffffff", color: "#0c83c8" },
                    }}
                  >
                    <MenuItem
                      component="a"
                      href="tel:+919597334782"
                      sx={{ backgroundColor: "#ffffff", color: "#0c83c8", fontSize: isSmallScreen ? "0.85rem" : "1rem" }}
                      onClick={handlePhoneMenuClose}
                    >
                      Call
                    </MenuItem>
                    <MenuItem
                      component="a"
                      href="https://wa.me/919597334782"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ backgroundColor: "#ffffff", color: "#0c83c8", fontSize: isSmallScreen ? "0.85rem" : "1rem" }}
                      onClick={handlePhoneMenuClose}
                    >
                      WhatsApp
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#0c83c8",
                  alignSelf: { xs: "flex-end", sm: "center" },
                  position: { xs: "absolute", sm: "static" },
                  top: { xs: 10, sm: "auto" },
                  right: { xs: 10, sm: "auto" },
                }}
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
          "& .MuiDrawer-paper": {
            backgroundColor: "#0c83c8",
            width: isExtraSmallScreen ? 180 : isSmallScreen ? 200 : 250,
          },
        }}
      >
        <Box
          sx={{
            width: isExtraSmallScreen ? 180 : isSmallScreen ? 200 : 250,
            pt: isExtraSmallScreen ? "120px" : isSmallScreen ? "130px" : "150px",
          }}
        >
          {renderDrawerLinks()}
        </Box>
      </Drawer>
      <Toolbar sx={{ minHeight: { xs: 110, sm: 80, md: 90 } }} />
    </>
  );
}

export default Navigation;