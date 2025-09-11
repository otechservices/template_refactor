export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
  gallery?: string[];
  featured?: boolean;
}
