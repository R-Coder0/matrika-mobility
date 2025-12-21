import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import { sendWeddingEnquiry } from "./src/utils/mailer.js";

dotenv.config();

console.log("🔍 ENV CHECK");
console.log("SMTP_HOST =", process.env.SMTP_HOST);
console.log("SMTP_PORT =", process.env.SMTP_PORT);
console.log("SMTP_USER =", process.env.SMTP_USER);
console.log("MAIL_TO =", process.env.MAIL_TO);
const app = express();
const PORT = 5000;

// ✅ CORS ENABLE (THIS IS THE KEY)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());

// 🔔 API
app.post("/api/wedding-enquiry", async (req, res) => {
  console.log("✅ API HIT");
  console.log("📥 Data:", req.body);

  try {
    await sendWeddingEnquiry(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Mail error:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});
