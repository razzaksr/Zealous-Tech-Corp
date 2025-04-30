import React from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { Link } from "react-scroll";

const Home = () => {
  localStorage.clear()
  return (
    <section
      className="home-section"
      style={{
        marginTop:"50px",
        background: "linear-gradient(135deg, #0c83c8 0%, #fc7a46 100%)",
        color: "#fff",
        paddingBottom: "20px",
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ textAlign: "center" }}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: {
                  xs: '2rem', // extra-small devices
                  sm: '2.5rem', // small devices
                  md: '3rem', // medium devices
                  lg: '3.5rem', // large devices
                },
              }}
            >
              Crafting Innovative Learning Solutions
              <br />
              That Ignite Your Potential
            </Typography>
            <Typography variant="h6" component="p" style={{ marginBottom: "40px", color: "#fff" }}>
              Learn | Practice | Implement | Career
            </Typography>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#fc7a46", color: "#fff", padding: "10px 20px" }}
            >
              <Link to="contacts-section" smooth={true} duration={2000} style={{ textDecoration: "none", color: "inherit" }}>
                Reach Us
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: "bold", color: "#fff" }}>
                Our Mission
              </Typography>
              <Typography variant="body1" component="p" style={{ color: "#fff" }}>
              Deliver a real time Skill set training in various genre to meet the industry requirements without any compromise
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: "bold", color: "#fff" }}>
                Our Vision
              </Typography>
              <Typography variant="body1" component="p" style={{ color: "#fff" }}>
                Our dream is to induce them with proper guidance to meet
                industry requirements and enhance their future
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: "bold", color: "#fff" }}>
                Founder's Message
              </Typography>
              <Typography variant="body1" component="p" style={{ color: "#fff" }}>
              "We Zealous believe and work towards “MUTUAL ENHANCEMENT FOR BOTH U AND
              US”
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Home;
