'use strict'

import express from 'express'
import { getAllBlogs } from '../controller/getAllBlogs'
import { getBlogsById } from '../controller/getBlogById'
import { updateBlogById } from '../controller/updateBlogById'
import { deleteBlogById } from '../controller/deleteBlogById'
import { createBlog } from '../controller/createBlog'

export const router = express.Router() 

router.get('/:id', getBlogsById)
router.get('/', getAllBlogs)
router.put('/:id', updateBlogById)
router.delete('/:id', deleteBlogById)
router.post('/', createBlog)
