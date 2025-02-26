const express = require("express");
const app = express();
require("dotenv").config();

const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");

const database = require("./config/database");
const cors = require("cors");

const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 4000;

// connect to db
database.connectToDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    maxAge: 14400,
  })
);

// Define rate limit rule
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 100, // ⏳ Allow max 100 requests per second per IP
  message: { error: "Too many requests, please try again later." },
  headers: true, // Adds Retry-After header
});

// Apply rate limiting to all routes
app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

app.use("/", routes);

// activate server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
