// src/components/Contact.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  Modal,
} from "@mui/material";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsModalOpen(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container id="contact" style={{ marginTop: "60px", marginBottom: "40px" }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <TextField label="Name" name="name" fullWidth required margin="normal" />
        <TextField label="Email" name="email" type="email" fullWidth required margin="normal" />
        <TextField
          label="Message"
          name="message"
          fullWidth
          multiline
          rows={4}
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "Send Message"}
        </Button>
      </Box>

      {/* Success Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography id="modal-title" variant="h5" gutterBottom>
            Your message was sent!
          </Typography>
          <Typography id="modal-description" variant="body1">
            Thank you for reaching out. I'll get back to you soon.
          </Typography>
          <Button
            onClick={() => setIsModalOpen(false)}
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Contact;
