import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

const teamMembers = [
  {
    name: "RAZAK MOHAMED S",
    title: "FOUNDER & HEAD OF",
    title2: "TALENT DEVELOPMENT",
  },
  {
    name: "RASHEEDHA R",
    title: "OPERATIONS",
    title2: "HEAD",
  },
  {
    name: "ANNAMALAI",
    title: "DEVELOPMENT",
    title2: "MANAGER",
  },
];

const About = () => {
  return (
    <section className="about-section">
      <Box
        sx={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Gradient background
          paddingTop: 8,
          paddingBottom: 8,
          marginTop: 8,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#fc7a46" }}
          >
            About Us
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: "#0c83c8" }}
            >
              Welcome to Zealous Tech Corp, where innovation meets education and
              excellence!
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: "#0c83c8" }}
            >
              At our institute, we're dedicated to empowering students to
              upskill and thrive in today's competitive tech industry. Through
              our comprehensive training programs, we've witnessed remarkable
              transformations and celebrated numerous achievements with our
              talented participants.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: "#0c83c8" }}
            >
              From our exhilarating events like C programming and tech training
              sessions exploring MySQL, Express, and React, each experience has
              been nothing short of extraordinary.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: "#0c83c8" }}
            >
              Our commitment extends to cutting-edge domains like Artificial
              Intelligence and Machine Learning, as showcased in our recent AI
              and ML training program.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: "#0c83c8" }}
            >
              Python web development and Flutter development have been
              highlights of our transformative journey, alongside dedicated
              educators and visionary departments at partner institutions.
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ color: "#0c83c8" }}
            >
              Join us in celebrating the achievements of our students and the
              collaborative spirit driving innovation forward. Together, let's
              continue pushing the boundaries of knowledge and development.
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ color: "#fc7a46" }}
            >
              Know Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: "center",
                      bgcolor: "#ffffff",
                      borderRadius: 2,
                    }}
                  >
                    {/* <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{ width: 150, height: 150, mx: "auto" }}
                    /> */}
                    <Typography variant="h6" sx={{ mt: 2, color: "#0c83c8" }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "#fc7a46" }}>
                      {member.title}
                      <br />
                      {member.title2}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default About;
