import express from "express";
import blogController from "../controller/blogController.ts";

const blogRoute = express.Router();

blogRoute.get('/api/blog', blogController.getBlog);

export default blogRoute;