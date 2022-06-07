const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// Obtain the request and response from express
// No mater which path is sent to the web server...
// they all gonna go back to index url
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));