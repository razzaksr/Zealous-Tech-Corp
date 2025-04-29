import React from "react";
import { Card, CardHeader, Grid, Paper, Typography } from "@mui/material";
import tietoEvry from "../Images/tietoEvryLogo.png";
import mobiezy from "../Images/mobiezyLogo.png";
import lnt from "../Images/ltInfotechLogo.PNG";
import hp from "../Images/hpLogo.jfif";
import dlithe from "../Images/dlitheLogo.jfif";
import igenix from "../Images/igenix.jfif";

const clients = [
  {
    id: 1,
    name: "TietoEvry",
    logo: tietoEvry,
  },
  {
    id: 2,
    name: "Mobiezy Pvt Ltd",
    logo: mobiezy,
  },
  {
    id: 3,
    name: "L&T Infotech",
    logo: lnt,
  },
  {
    id: 4,
    name: "HP",
    logo: hp,
  },
  {
    id: 5,
    name: "DLithe",
    logo: dlithe,
  },
  {
    id: 6,
    name: "Igenik Infoway",
    logo: igenix,
  },
];

const ClientsCard = () => {
  return (
    <section className="clients-section">
      <Card elevation={0} sx={{ marginTop: "5%", padding: "2%" }}>
        <CardHeader
          title="WHERE OUR RESOURCES WORKED"
          sx={{ textAlign: "center", color: "#fc7a46", fontSize: "1.5rem" }}
        />
        <Grid container spacing={4}>
          {clients.map((client) => (
            <Grid item key={client.id} xs={12} sm={6} md={4} lg={2}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "none",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "150px",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    maxWidth: "70px",
                    maxHeight: "50px",
                    marginBottom: "1rem",
                  }}
                  src={client.logo}
                  alt={client.name}
                />
                <Typography sx={{ color: "#0c83c8" }}>{client.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Card>
    </section>
  );
};

export default ClientsCard;
