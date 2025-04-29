import React from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import Iframe from "react-iframe";

const Footer = () => {
  return (
    <footer style={{ background: "#0c83c8", color: "white", padding: "2%" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} lg={4} >
            <Typography variant="h6" gutterBottom>
              Get to Know Us
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <ScrollLink
                  to="home-section"
                  smooth={true}
                  duration={1000}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about-section"
                  smooth={true}
                  duration={1000}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services-section"
                  smooth={true}
                  duration={1000}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="training-section"
                  smooth={true}
                  duration={1000}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Technology
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="clients-section"
                  smooth={true}
                  duration={1000}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Clients
                </ScrollLink>
              </li>
            </ul>
          </Grid>

          {/* Google Maps */}
          {/* <Grid container justifyContent="center" style={{ marginTop: "2rem" }}> */}
          <Grid item xs={6} md={4} lg={4} style={{ height: "300px" }}>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.781567728469!2d78.13936371360762!3d11.669799415509564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf04680edbe0f%3A0xcb56c889044c2542!2sZealous%20Academy%20of%20Career%20Training!5e0!3m2!1sen!2sin!4v1711376005021!5m2!1sen!2sin"
              width="70%"
              height="70%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Grid>
          {/* </Grid> */}

          <Grid item xs={12} md={4} lg={4} >
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            <div>
              <IconButton
                href="https://www.facebook.com/razzaksr/"
                target="_blank"
                rel="noopener"
                style={{ color: "white", marginRight: "0.5rem" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/zealous-academy-of-career-training-9927bb117/?originalSubdomain=in"
                target="_blank"
                rel="noopener"
                style={{ color: "white", marginRight: "0.5rem" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/zealous_tech/"
                target="_blank"
                rel="noopener"
                style={{ color: "white", marginRight: "0.5rem" }}
              >
                <Instagram />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        {/* Secondary footer */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="left" style={{ color: "white" }}>
              &copy; 2024 Zealous Tech Corp. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="right">
              Developed by Noorul
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
