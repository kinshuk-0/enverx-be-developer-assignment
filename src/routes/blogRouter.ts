import express, { Request, Response } from 'express'
export const router = express.Router() 


router.get("/posts",(req: Request,res: Response)=>{
  res.send("Send all articles")
})
