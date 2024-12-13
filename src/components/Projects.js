// src/components/Projects.js
import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

const Projects = () => {
  const projects = [
    { title: "Todo App", description: "A simple task management app.", link: "#" },
    { title: "Blog Platform", description: "A platform for sharing blogs.", link: "#" },
    { title: "E-commerce Store", description: "A modern online shopping site.", link: "#" },
    { title: "Portfolio Website", description: "This very portfolio site!", link: "#" },
  ];

  return (
    <Container id="projects" style={{ marginTop: "60px" }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginBottom: "10px" }}>
                  {project.description}
                </Typography>
                <Button
                  href={project.link}
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "10px" }}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
