// backend/adminEmailTemplate.js
const adminEmailTemplate = ({ name, email, message }) => {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="color: #007bff;">New Contact Message</h1>
        <p style="font-size: 16px;">You have received a new message via your portfolio website:</p>
        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 10px; margin-top: 20px;">
          <h2 style="color: #333;">Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff;">
            ${message}
          </blockquote>
        </div>
        <p style="margin-top: 30px;">Visit your <a href="https://yourportfolio.com" style="color: #007bff; text-decoration: none;">portfolio dashboard</a> for more details.</p>
      </div>
    `;
  };
  
  module.exports = adminEmailTemplate;
  