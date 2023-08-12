import { Request, Response } from "express"
import { db } from "../config/db";
import { ResultSetHeader } from "mysql2";

export function updateBlogById(req: Request, res: Response) {
  const {id} = req.params;
  const { title, content, category } = req.body;

  if(content === undefined || title === undefined || category == undefined) {
    res.status(400).send( 'Bad Request' )
  } else {

    db.query(`UPDATE blogs SET title = \"${title}\", content = \"${content}\", category = \"${category}\" WHERE id = ${id}`,
   (err: Error, result: ResultSetHeader) => {

      if(err) {

        console.log('Internal server error ', err)
        res.status(500).json({ error: 'Internal server error' })

      } else {

        if(result.affectedRows === 0) {
          res.json({ info: 'Blog ID not found' })
        } else {
          res.json({ success: 'Blog Updated Successfully' })
        }

      }

   })
  }
}