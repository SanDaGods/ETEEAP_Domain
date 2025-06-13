const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, ".")));

// Handle all other routes (serve index.html for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
