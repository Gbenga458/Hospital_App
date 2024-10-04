import React from "react";
import Screen from "./Slider";
import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import Departments from "./Departments";
import h1_hero from "../../assets/h1_hero.png";
import Image from "mui-image";
import { Box } from "@mui/system";
import Gallery from "./Gallery";

const Homepage = () => {
  const theme = useTheme();

  const departments = [
    { name: "Anesthesiology And Critical Care" },
    { name: "Clinical Biochemistry" },
    { name: "Department of Dermatology" },
    { name: "Microbiology" },
    { name: "Ophthalmology" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {/* Slider Section */}
        <Grid item xs={12} sx={{ marginBottom: theme.spacing(7.5) }}>
          <Screen />
        </Grid>

        {/* Department and Image Section */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: theme.spacing(7.5),
            borderRadius: "40px",
            gap: theme.spacing(1.25),
          }}
        >
          <Grid
            container
            item
            xs={12}
            sx={{
              minHeight: "80vh",
            }}
          >
            {/* Image Section */}
            <Grid item xs={12} md={5}>
              <Image
                src={h1_hero}
                shift="top"
                distance="2rem"
                shiftDuration={320}
                fit="cover"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* Text and Avatar Section */}
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: theme.spacing(6),
                backgroundColor: "#ccff99",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    width: "500px",
                    marginTop: theme.spacing(6.25),
                    fontSize: "30px",
                    fontStyle: "italic",
                    fontWeight: "bold", // Make text bold
                    color: "black",     // Make text black
                    textAlign: "center",
                  }}
                >
                  “I am at an age where I just want to be fit and healthy. Our
                  bodies are our responsibility! So start caring for your body,
                  and it will care for you. Eat clean, and it will reward you in
                  the long run.”
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, marginTop: theme.spacing(2) }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: theme.spacing(3.75) }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",  // Make text bold
              color: "black",      // Make text black
            }}
          >
            Gallery
          </Typography>
        </Grid>

        <Grid container item xs={12}>
          <Gallery />
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
