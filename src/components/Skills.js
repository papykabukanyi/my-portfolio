import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Material-UI",
  "Git",
  "Express.js",
  "REST APIs",
  "Docker",
  "TypeScript",
];

const Skills = () => {
  return (
    <Container id="skills" style={{ marginTop: "60px" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{
          fontFamily: "'MagicUI Beta', sans-serif",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        My Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              style={{
                transition: "transform 0.3s ease",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                backgroundColor: "#f5f5f5",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "'MagicUI Beta', sans-serif",
                    color: "#333",
                  }}
                >
                  {skill}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
