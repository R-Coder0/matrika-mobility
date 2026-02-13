import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import { sendWeddingEnquiry } from "./src/utils/mailer.js";
import { sendAirportEnquiry } from "./src/utils/sendAirportEnquiry.js";
import { sendOutstationEnquiry } from "./src/utils/sendOutstationEnquiry.js";
import { sendUrbaniaEnquiry } from "./src/utils/sendUrbaniaEnquiry.js";
import { sendLuxuryEnquiry } from "./src/utils/sendLuxryCarEnquiry.js";

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
    origin: "https://taxitribe.in",
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
// ✈️ AIRPORT ENQUIRY API
app.post("/api/airport-enquiry", async (req, res) => {
  console.log("✈️ Airport API HIT");
  console.log("📥 Data:", req.body);

  try {
    await sendAirportEnquiry(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Airport Mail error:", error);
    res.status(500).json({ success: false });
  }
});
// 🚗 OUTSTATION ENQUIRY API
app.post("/api/outstation-enquiry", async (req, res) => {
  console.log("🚗 Outstation API HIT");
  console.log("📥 Data:", req.body);

  try {
    await sendOutstationEnquiry(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Outstation Mail error:", error);
    res.status(500).json({ success: false });
  }
});

// 🚐 URBANIA ENQUIRY API
app.post("/api/urbania-enquiry", async (req, res) => {
  console.log("🚐 Urbania API HIT");
  console.log("📥 Data:", req.body);

  try {
    await sendUrbaniaEnquiry(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Urbania Mail error:", error);
    res.status(500).json({ success: false });
  }
});

app.post("/api/luxury-enquiry", async (req, res) => {
  try {
    await sendLuxuryEnquiry(req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});
