"use strict"


import express, { Router } from 'express'
import { router } from "../src/routes/blogRouter"

const app  = express();
const port = 8082;

app.use(express.json())
app.use('/posts', router)

app.listen(port, () => {
  console.log("Connected...");
});