// src/components/Testimonials.js
import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Fantastic developer! Always delivers beyond expectations." },
    { name: "Jane Smith", feedback: "Their attention to detail and dedication are unmatched." },
    { name: "Sarah Connor", feedback: "Highly professional and great to work with." },
  ];

  return (
    <Container id="testimonials" style={{ marginTop: "60px" }}>
      <Typography variant="h4" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  "{testimonial.feedback}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
