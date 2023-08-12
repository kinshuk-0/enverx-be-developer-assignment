import { Request, Response } from "express"

export function deleteBlogById(req: Request, res: Response) {
  const {id} = req.params;
}