"use strict"


import express from "express"

const app  = express();
const port = 8082;

app.use(express.json())

app.get('/test', (req, res) => {
  res.send("hello world")
});

app.listen(port, () => {
  console.log("Connected...");
});