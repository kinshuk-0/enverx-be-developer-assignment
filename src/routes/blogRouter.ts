import express, { Request, Response } from 'express'
export const router = express.Router() 

import { getAllBlogs } from '../controller/getAllBlogs'
import { getBlogsById } from '../controller/getBlogById'
import { updateBlogById } from '../controller/updateBlogById'
import { deleteBlogById } from '../controller/deleteBlogById'


router.get('/:id', getBlogsById)
router.get('/', getAllBlogs)
router.put('/:id', updateBlogById)
router.delete('/:id', deleteBlogById)
