"use strict"


import express, { Router } from 'express'
import { router } from "../src/routes/blogRouter"
import { Post } from './models/Posts'
import { db } from './config/db'

const app  = express();
const port = 8082;

app.use(express.json())
app.use('/', router)

app.get('/test', (req, res) => {
  res.send("hello world")
});


app.post('/seed', async (req, res) => {
  try {
      const dataToSeed: Omit<Post, 'id'>[] = [
        {
          title: `Blog Post 1`,
          content: `This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.
          This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.`,
          createdDate: new Date()
        },
        {
          title: `Blog Post 2`,
          content: `This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.
          This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.`,
          createdDate: new Date()
        },
        {
          title: `Blog Post 3`,
          content: `This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.
          This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.`,
          createdDate: new Date()
        },
        {
          title: `Blog Post 4`,
          content: `This is the content of Blog Post. This is the content of Blog Post. This is the content of Blog Post.
          This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.This is the content of Blog Post.`,
          createdDate: new Date()
        }
      ]

      for (const item of dataToSeed) {
          await (await db).query('INSERT INTO blogs SET ?', item);
      }

      res.status(200).json({ message: 'Database seeded successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error seeding database' });
  }
});

app.listen(port, () => {
  console.log("Connected...");
});