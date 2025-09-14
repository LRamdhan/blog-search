import fs from 'fs';
import prisma from '../src/config/prismaClient.ts';
import { BlogData, BlogDataParsed } from './types/seedType.ts';

const insertBlog = async (blog: BlogData[]) => {
  const parsedBlog: BlogDataParsed[] = blog.map((blog: BlogData) => {
    const parsed: BlogDataParsed = {
      ...blog,
      publication_date: new Date(blog.publication_date)
    }    
    return parsed
  })
  await prisma.blog.createMany({
    data: parsedBlog
  })
}

try {
  await prisma.$connect();
  const data: string = fs.readFileSync('data/blog_id.json', 'utf-8');
  const jsonData: BlogData[] = JSON.parse(data);
  await insertBlog(jsonData);
  prisma.$disconnect();
  console.log('Seed success');
} catch(error) {
  console.log(error);
  console.log('Seed fail');
  await prisma.$disconnect();
}
