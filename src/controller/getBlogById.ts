'use strict'

import { Request, Response } from 'express'
import { db } from '../config/db'
import { Post } from '../models/Posts'

export function getBlogsById(req: Request, res: Response) {
  const {id} = req.params

  db.query(`SELECT * FROM blogs WHERE id = ${id}`, (err: Error, result: Post[]) => {

    if(err) {
      console.error('Internal server error ', err)
      res.status(500).json({ error: 'Internal server error' })
    } else {
      if(result.length === 0) {
        res.json({ info: 'Blog ID not found' })
      } else {
        res.send(result)
      }
    }
  })
}