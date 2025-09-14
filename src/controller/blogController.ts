import type { Request, Response } from "express";
import blogModel from "../model/blogModel.ts";
import { Blog } from "../model/types/blogType.ts";

const blogController = {
  getBlog: async (req: Request, res: Response) => {
    const keyword: string | undefined = req.query.s as string | undefined;
    const page: string | undefined = req.query.page as string | undefined;
    const parseKeyword: string = (typeof keyword !== 'string') ? '' : keyword;

    let parsePage: number;
    const regexNumberOnly = /^\d+$/;
    if(page) {
      if(regexNumberOnly.test(page as string)) {
        parsePage = parseInt(page)
      } else {
        parsePage = 1
      }
    } else {
      parsePage = 1
    }    

    const blog: Blog[] = await blogModel.getBlog(parseKeyword, parsePage);

    return res.json({
      message: 'OK',
      data: blog
    });
  },

}

export default blogController