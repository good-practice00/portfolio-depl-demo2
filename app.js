const express = require("express");
const { resolve } = require("path");
const path = require("path");
const app = express();

app.use(express.json());

const port = process.env.PORT;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path, resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
