import express from "express";
import blogController from "../controller/blogController.ts";

const blogRoute = express.Router();

blogRoute.get('/api/blog', blogController.getBlog);
blogRoute.post('/api/blog', blogController.createBlog);

export default blogRoute;