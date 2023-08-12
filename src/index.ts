"use strict"


'use strict'

import express from 'express'
import { router } from '../src/routes/blogRouter'

const app  = express();
const port = 8082;

app.use(express.json())
app.use('/posts', router)

app.listen(port, () => {
  console.log('Connected...');
});