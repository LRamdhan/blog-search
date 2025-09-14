import type { Request, Response } from "express";

const blogController = {
  getBlog: async (req: Request, res: Response) => {
    return res.json({
      message: 'hellow'
    });
  },

  createBlog: async (req: Request, res: Response) => {
    return res.json({
      message: 'success'
    });
  }
}

export default blogController