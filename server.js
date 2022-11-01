const express = require("express");
require("dotenv").config()
const app = express()

const port = process.env.PORT || 3001

app.get("/greeting/:name", (req, res) => {
  res.send("Hello " + req.params.name);
})

app.listen(port,()=> {
  console.log("listening on port...", port);
})