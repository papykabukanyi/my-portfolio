// src/components/Footer.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" padding="20px" textAlign="center">
      <Typography variant="body2">© 2024 My Portfolio. All Rights Reserved.</Typography>
      <Box mt={2}>
        <Button
          color="inherit"
          href="https://github.com"
          startIcon={<GitHub />}
          style={{ marginRight: "10px" }}
        >
          GitHub
        </Button>
        <Button
          color="inherit"
          href="https://linkedin.com"
          startIcon={<LinkedIn />}
          style={{ marginRight: "10px" }}
        >
          LinkedIn
        </Button>
        <Button color="inherit" href="mailto:your@email.com" startIcon={<Email />}>
          Email
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
