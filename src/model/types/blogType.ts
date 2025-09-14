export type CreateBlog = {
  title: string,
  content: string,
  authorId: number
};

export interface BlogValue {
  title: string,
  content: string | null,
  published: boolean,
  authorId: number
};

export type Blog = Promise<BlogValue[]>;