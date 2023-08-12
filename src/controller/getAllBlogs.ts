'use strict'

import { Request, Response } from 'express'
import { db } from '../config/db'
import { Post } from '../models/Posts'

export async function getAllBlogs(req: Request, res: Response) {

  const { category } = req.body

  if(category) {
    db.query(`SELECT * FROM blogs WHERE category = \"${category}\" ORDER BY createdDate DESC, title ASC`,
     (err: Error, result: Post[]) => {
      if(err) {
        console.error('Internal server error ', err)
        res.status(500).json({ error: 'Internal server error' })
      } else {
        res.send(result)
      }
    })
  } else {
    db.query('SELECT * FROM blogs ORDER BY createdDate DESC, title ASC', (err: Error, result: Post[]) => {
      if(err) {
        console.error('Internal server error ', err)
        res.status(500).json({ error: 'Internal server error' })
      } else {
        res.send(result)
      }
    })
  }
}