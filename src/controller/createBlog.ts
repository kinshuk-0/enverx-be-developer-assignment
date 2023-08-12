'use strict'

import { Request, Response } from 'express'
import { db } from '../config/db'
import { ResultSetHeader } from 'mysql2'


export function createBlog(req: Request, res: Response) {
  const { title, content, category } = req.body

  if(content === undefined || title === undefined || category == undefined) {

    res.status(400).send( 'Bad Request' )

  } else {

    const createdDate = new Date()

    db.query(`INSERT INTO blogs (title, content, category, createdDate) VALUES (\"${title}\", \"${content}\", \"${category}\", NOW())`, 
    (err: Error, result: ResultSetHeader) => {
      if(err) {
        console.error('Internal server error ', err)
        res.status(500).json({ error: 'Internal server error' })
      } else {
        res.json({ success: 'Blog added successfully', id: `${result.insertId}` })
      }
     })
  }
}
