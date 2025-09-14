import express from 'express';
import blogRoute from '../route/blogRoute.ts';

// app
const expressApp = express();

// feature
expressApp.use(express.json());

// route
expressApp.use(blogRoute);

export default expressApp;