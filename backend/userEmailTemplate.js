const userEmailTemplate = ({ name }) => {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="color: #007bff;">Thank You, ${name}!</h1>
        <p style="font-size: 16px;">We have received your message and will get back to you shortly.</p>
        <div style="margin-top: 20px; text-align: center;">
          <img
            src="http://localhost:5000/images/mainpic.jpg"
            alt="Thank You"
            style="border-radius: 10px; max-width: 100%; height: auto;"
          />
        </div>
        <p style="margin-top: 20px;">
          While you wait, feel free to check out my 
          <a href="https://yourportfolio.com/projects" style="color: #007bff; text-decoration: none;">latest projects</a> or 
          <a href="https://yourportfolio.com/resume" style="color: #007bff; text-decoration: none;">download my resume</a>.
        </p>
        <p style="margin-top: 30px;">Looking forward to connecting with you!</p>
        <p style="margin-top: 20px; font-size: 14px; color: #777;">
          — The Portfolio Team
        </p>
      </div>
    `;
  };
  
  module.exports = userEmailTemplate;
  