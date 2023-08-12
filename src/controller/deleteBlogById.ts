'use strict'

import { Request, Response } from 'express'
import { db } from '../config/db'
import { ResultSetHeader } from 'mysql2'

export function deleteBlogById(req: Request, res: Response) {
  const { id } = req.params

  db.query(`DELETE FROM blogs WHERE id = ${id}`, (err: Error, result: ResultSetHeader) => {
    if(err) {
      console.error('Internal server error ', err)
      res.status(500).json({ error: 'Internal server error' })
    } else {
      if(result.affectedRows === 0) {
        res.json({ info: 'Blog ID not found' })
      } else {
        res.json({ success: 'Blog Deleted Successfully' })
      }
    }
  })
}