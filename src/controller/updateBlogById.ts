import { Request, Response } from "express"
import { db } from "../config/db";
import { Post } from "../models/Posts";

export function updateBlogById(req: Request, res: Response) {
  const {id} = req.params;
}