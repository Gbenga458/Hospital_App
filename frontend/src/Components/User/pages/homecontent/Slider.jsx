import React, { useState, useEffect, useCallback } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import img from "../../assets/h1_hero.png";

const StyledSliderArea = styled("div")`
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 100vh;
  opacity: 0.8;
  margin: 0;
`;

const AnimatedSpan = styled("span")`
  animation: fade-in 2s ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const StyledHeroCaption = styled("div")`
  text-align: left;
`;

const Screen = () => {
  const words = ["Health", "Alafia", "santé"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateWordIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(updateWordIndex, 2000);
    return () => clearInterval(interval);
  }, [updateWordIndex]);

  const currentWord = words[currentIndex];

  return (
    <StyledSliderArea>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={9} md={8} lg={9} xl={7}>
            <StyledHeroCaption>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  fontSize: "40px",
                  fontWeight: "bold", // Bold
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                Committed to success
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: "black", // Black text
                  fontWeight: "bold", // Bold text
                }}
              >
                We care about your{" "}
                <strong>
                  <AnimatedSpan>{currentWord}</AnimatedSpan>
                </strong>
              </Typography>
              <Typography
                variant="body1"
                fontSize={20}
                sx={{
                  color: "black", // Black text
                  fontWeight: "bold", // Bold text
                }}
              >
                Efficient hospital management system streamlining operations,
                enhancing patient care, and optimizing resource allocation.
              </Typography>
            </StyledHeroCaption>
          </Grid>
        </Grid>
      </Container>
    </StyledSliderArea>
  );
};

export default Screen;
