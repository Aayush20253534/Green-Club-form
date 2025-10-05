import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS: Allow only your Netlify frontend
app.use(cors({
  origin: ["https://greenclubform.netlify.app"],
  methods: ["GET", "POST"],
}));

app.use(express.json());

// ✉️ Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📬 Send email endpoint
app.post("/send-email", async (req, res) => {
  try {
    const data = req.body;

    if (!data.fullName || !data.email || !data.motivation) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields (name, email, or motivation).",
      });
    }

    const htmlBody = `
      <h2>🌿 New Green Club Application</h2>
      <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
        <tr><th align="left">Full Name</th><td>${data.fullName || "N/A"}</td></tr>
        <tr><th align="left">Email</th><td>${data.email || "N/A"}</td></tr>
        <tr><th align="left">Phone</th><td>${data.phone || "N/A"}</td></tr>
        <tr><th align="left">Institution</th><td>${data.institution || "N/A"}</td></tr>
        <tr><th align="left">Preferred Team</th><td>${data.team || "N/A"}</td></tr>
        <tr><th align="left">Experience</th><td>${data.experience || "N/A"}</td></tr>
        <tr><th align="left">Availability</th><td>${data.availability || "N/A"}</td></tr>
        <tr><th align="left">LinkedIn / Portfolio</th><td>${data.linkedin || "N/A"}</td></tr>
        <tr><th align="left">Motivation</th><td>${data.motivation || "N/A"}</td></tr>
      </table>
    `;

    const mailOptions = {
      from: `"Green Club" <${process.env.EMAIL_USER}>`,
      replyTo: data.email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `🌱 New Application from ${data.fullName}`,
      html: htmlBody,
    };

    // ✉️ Send Email
    const info = await transporter.sendMail(mailOptions);

    // 📨 Log delivery details in backend console
    console.log("✅ Email sent successfully!");
    console.log("📨 Message ID:", info.messageId);
    console.log("📤 Response:", info.response);
    console.log("📬 Envelope:", info.envelope);
    console.log("📧 Accepted:", info.accepted);
    console.log("🚫 Rejected:", info.rejected);

    return res.status(200).json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// 🟢 Health check route
app.get("/", (req, res) => {
  res.send("✅ Green Club API is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
