import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faChartBar,
  faRobot,
  faTools,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

const technologies = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "Our team excels in building end-to-end solutions, from front-end interfaces to back-end systems, ensuring seamless integration and optimal performance.",
    icon: faCode,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We specialize in creating mobile apps for both iOS and Android platforms, leveraging the latest technologies to deliver engaging and intuitive user experiences.",
    icon: faMobileAlt,
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Unlock insights from your data with our advanced analytics solutions. From data collection to visualization, we help you make informed decisions and drive business growth.",
    icon: faChartBar,
  },
  {
    id: 4,
    title: "Automation Testing",
    description:
      "Streamline your testing processes and ensure the quality of your software with our automation testing services.",
    icon: faRobot,
  },
  {
    id: 5,
    title: "Database Management",
    description:
      "Managing and optimizing databases to store, retrieve, and analyze data efficiently, ensuring data integrity and security.",
    icon: faDatabase,
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "Providing expert advice and solutions to enhance your IT infrastructure, optimize processes, and achieve business objectives.",
    icon: faTools,
  },
];

const TrainingCards = () => {
  return (
    <section className="training-section">
      <Card elevation={0} sx={{ marginTop: "5%", padding: "2%" }}>
        <CardHeader
          title="TECHNICAL TRAINING WE PROVIDE"
          sx={{ textAlign: "center", color: "#0c83c8", fontSize: "1.5rem" }}
        />
        <Grid container spacing={4}>
          {technologies.map((tech) => (
            <Grid item key={tech.id} xs={12} md={6} lg={4}>
              <Card
                elevation={5}
                sx={{
                  backgroundColor: "#fc7a46",
                  color: "#ffffff",
                  padding: "1rem",
                  height: "90%",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon
                    icon={tech.icon}
                    style={{
                      color: "#0c83c8",
                      fontSize: "3rem",
                      marginBottom: "1rem",
                    }}
                  />
                </div>
                <CardHeader
                  title={tech.title}
                  sx={{ textAlign: "center", padding: "0", color: "#0c83c8" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ color: "#ffffff", textAlign: "center" }}
                  >
                    {tech.description}
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

export default TrainingCards;
