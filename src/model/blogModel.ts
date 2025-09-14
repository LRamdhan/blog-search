import prisma from "../config/prismaClient.ts";
import { searchBlog } from './../../generated/prisma/sql';
import { Blog, BlogPromise } from "./types/blogType.ts";

const blogModel = {
  getBlog: async (keyword: string, page: number): BlogPromise => {
    const blog: Blog[] = await prisma.$queryRawTyped(searchBlog(keyword, page))
    return blog
  }
}

export default blogModel