// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
// backend/server.js
const adminEmailTemplate = require("./adminEmailTemplate");
const userEmailTemplate = require("./userEmailTemplate");


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Contact Route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email to admin
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Your email address
      subject: `Portfolio Contact from ${name}`,
      html: adminEmailTemplate({ name, email, message }), // Use styled template
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // User's email address
      subject: "Thank you for contacting me!",
      html: userEmailTemplate({ name }), // Use styled template
    });

    res.status(200).json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send emails. Please try again." });
  }
});
app.use(express.static("public"));
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
