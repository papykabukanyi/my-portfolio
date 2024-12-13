import React, { useEffect, useRef } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import KUTE from "kute.js";

const About = ({ scrollToSection }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Create the text animation with KUTE.js
    if (textRef.current) {
      KUTE.to(
        textRef.current,
        {
          text: `
          Hello! I am <strong>Papy Kabukanyi</strong>, a passionate full-stack web developer specializing in creating elegant, user-friendly, and scalable web applications. 
          With a strong foundation in <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>, I am dedicated to crafting solutions that deliver exceptional user experiences.`,
        },
        { duration: 3000 } // Animation duration (3 seconds)
      ).start();
    }
  }, []);

  return (
    <Container id="about" style={{ marginTop: "40px" }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left Side: About Me Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              fontFamily: "'MagicUI Beta', sans-serif",
              marginBottom: "20px",
            }}
          >
            About Me
          </Typography>
          {/* Animated Text */}
          <Typography
            variant="body1"
            ref={textRef} // Attach ref for KUTE.js to target
            style={{
              lineHeight: "1.8",
              fontFamily: "'MagicUI Beta', sans-serif",
              color: "#333",
            }}
          >
            {/* Placeholder text that will animate */}
            Loading...
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "20px" }}
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </Grid>

        {/* Right Side: Icon Cloud */}
        <Grid item xs={12} md={6}>
          {/* Add any additional content, e.g., an animation or graphic */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
