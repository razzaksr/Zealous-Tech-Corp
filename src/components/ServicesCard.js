import React from "react";
import Corporate from "../Images/CorporateTraining.jfif";
import Inhouse from "../Images/InHouseTraining.jfif";
import Campus from "../Images/CampusTraining.jfif";
import ProofOfConcepts from "../Images/ProofOfConcepts.jfif";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const services = [
  {
    title: "CORPORATE",
    img: Corporate,
    subtitle1: "ONBOARD TRAINING",
    desc1: "Smooth integration into the company culture & clear understanding of roles and responsibilities",
    subtitle2: "INTERNSHIPS",
    desc2: "Real-world exposure to industry practices to build a professional network",
    subtitle3: "DOMAIN TRAINING",
    desc3: "Develop deep expertise in specific fields to enhance career prospects with specialized skills",
  },
  {
    title: "IN-HOUSE",
    img: Inhouse,
    subtitle1: "COMPETITIVE TRAINING",
    desc1: "Enhancing employability and career growth to stay competitive in the market",
    subtitle2: "BOOTCAMPS",
    desc2: "Intensive training programs designed for specific skill sets and hands-on experience",
    subtitle3: "INTERNSHIPS",
    desc3: "Offer internship opportunities for practical experience and to build a professional network",
  },
  {
    title: "CAMPUS",
    img: Campus,
    subtitle1: "VALUE ADDED COURSES",
    desc1: " Courses to enhance students' skills and knowledge",
    subtitle2: "WORKSHOPS",
    desc2: "Hands-on sessions focused on specific topics or skills, short-term and intensive learning",
    subtitle3: "BOOTCAMPS",
    desc3: "Intensive training programs for immersive experience and designed to develop skills",
  },
  {
    title: "DEVELOPMENT",
    img: ProofOfConcepts,
    subtitle1: "DOMAIN APPLICATIONS",
    desc1: "Development of domain-specific expertise and practical applications",
    subtitle2: "RESEARCH & DEVELOPMENT",
    desc2: "Opens opportunities for advanced studies and publications",
    subtitle3: "REAL-TIME APPLICATIONS",
    desc3: "Banking, E-Commerce, Logistics, and other real-world applications",
  },
];

const ServicesCard = () => {
  return (
    <section className="services-section">
      <Card elevation={0} sx={{ marginTop: "5%", padding: "2%" }}>
        <CardHeader
          title="SERVICES WE OFFER"
          sx={{ textAlign: "center", color: "#fc7a46" }}
        />
        <Grid container spacing={4}>
          {services.map((serv) => (
            <Grid item key={serv.id} xs={12} md={6} lg={3}>
              <Card
                elevation={5}
                sx={{
                  backgroundColor: "#0c83c8",
                  color: "#ffffff",
                  height: "100%",
                }}
              >
                <CardHeader title={serv.title} sx={{ textAlign: "center" }} />
                <CardMedia
                  component="img"
                  height="194"
                  image={serv.img}
                  alt={serv.title}
                />
                <CardContent>
                  <Typography sx={{ color: "#fc7a46", fontSize: "125%" }}>
                    {serv.subtitle1}
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {serv.desc1}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography sx={{ color: "#fc7a46", fontSize: "125%" }}>
                    {serv.subtitle2}
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {serv.desc2}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography sx={{ color: "#fc7a46", fontSize: "125%" }}>
                    {serv.subtitle3}
                  </Typography>
                  <Typography
                    sx={{ color: "#ffffff" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {serv.desc3}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </section>
  );
};

export default ServicesCard;
