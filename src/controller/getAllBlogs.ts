import { Request, Response } from "express"
import { db } from '../config/db';
import { Post } from "../models/Posts";

export async function getAllBlogs(req: Request, res: Response) {

  db.query("SELECT * FROM blogs", (err: Error, result: Post[]) => {
    if(err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.send(result)
    }
  })
}