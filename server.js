require("dotenv").config();

const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");
app.use(express.json());
const path = require("path");
app.use("/api/portfolio", portfolioRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
