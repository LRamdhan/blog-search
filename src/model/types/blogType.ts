export interface Blog {
  id: number,
  title: string,
  content: string,
  author: string,
  category: string,
  comments: {
    text: string,
    author: string
  }[],
  image_url: string,
  likes: number,
  publication_date: string,
  tags: string[],
  views: number
};

export type BlogPromise = Promise<Blog[]>;