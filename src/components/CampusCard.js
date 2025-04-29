import React from "react";
import { Card, CardHeader, Grid, Typography } from "@mui/material";

const campus = [
  {
    id: 1,
    name: "Kalasalingam University, Krishnan Kovil",
    logo: null,
  },
  {
    id: 2,
    name: "Sapthagiri Engineering College, Bangalore",
    logo: null,
  },
  {
    id: 3,
    name: "Saveetha Engineering College, Chennai",
    logo: null,
  },
  {
    id: 4,
    name: "SRM Valliammai Engineering College, Chennai",
    logo: null,
  },
  {
    id: 5,
    name: "Rajiv Gandhi College of Engineering & Technology, Pudhucherry",
    logo: null,
  },
  {
    id: 6,
    name: "Christ College of Engineering & Technology, Pudhucherry",
    logo: null,
  },
  {
    id: 7,
    name: "Kamaraj College of Engineering & Technology, Virudhunagar",
    logo: null,
  },
  {
    id: 8,
    name: "Mepco Schlenk Engineering College, Sivakasi",
    logo: null,
  },
  {
    id: 9,
    name: "Muthayammal Engineering College, Namakkal",
    logo: null,
  },
  // {
  //   id: 10,
  //   name: "Muthayammal College of Engineering, Namakkal",
  //   logo: null,
  // },
  {
    id: 11,
    name: "K Ramakrishnan College of Engineering, Trichy",
    logo: null,
  },
  {
    id: 12,
    name: "C Abdul Hakeem College of Engineering and Technology, Vellore",
    logo: null,
  },
  {
    id: 13,
    name: "KSR Institution, Tiruchengode",
    logo: null,
  },
  {
    id: 14,
    name: "Mahendra Engineering College for Women, Tiruchengode",
    logo: null,
  },
  {
    id: 15,
    name: "Bharathiyar Engineering College for Women, Thalaivasal",
    logo: null,
  },
  {
    id: 16,
    name: "AVS Engineering College, Salem",
    logo: null,
  },
  {
    id: 17,
    name: "Bharath University, Chennai",
    logo: null,
  },
  {
    id: 18,
    name: "Bannariamman Institute of Technology, Sathyamangalam",
    logo: null,
  },
  {
    id: 19,
    name: "Builders Engineering College, Erode",
    logo: null,
  },
  {
    id: 20,
    name: "National Engineering College, Kovilpatti",
    logo: null,
  },
  {
    id: 21,
    name: "SDM Institute of Technology, Ujire, Karnataka",
    logo: null,
  },
  {
    id: 22,
    name: "Vignan Institute of Information Technology, Vishakapatnam",
    logo: null,
  },
  {
    id: 23,
    name: "Sri Venkatesa Perumal Engineering and Technology, Puttur",
    logo: null,
  },
  {
    id: 24,
    name: "Mangalore Institute of Technology and Engineering, Mangalore, Karnataka",
    logo: null,
  },
  {
    id: 25,
    name: "N.M.A.M. Institute of Technology, Nitte, Udupi, Karnataka",
    logo: null,
  },
];

const CampusCard = () => {
  return (
    <section
      className="campus-section"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Gradient background
        paddingTop: "3%",
        paddingBottom: "5%",
      }}
    >
      <Card
        elevation={0}
        sx={{
          padding: "2%",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <CardHeader
          title="CAMPUSES WHERE OUR EXPERTS WORKED"
          sx={{ textAlign: "center", color: "#0c83c8", fontSize: "1.5rem" }}
        />
        <Grid container spacing={4}>
          {campus.map((campus) => (
            <Grid item key={campus.id} xs={6} sm={6} md={4} lg={2}>
              <Card
                elevation={2}
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#0c83c8",
                  padding: "1rem",
                  display: "flex",
                  minHeight: "200px",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {campus.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </section>
  );
};

export default CampusCard;
