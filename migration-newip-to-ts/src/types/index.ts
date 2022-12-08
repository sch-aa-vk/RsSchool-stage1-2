export interface INewsAPI {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  status: string;
  totalResults: number;
  source: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  };
  articles: {
    source: {
      id: string;
      name: string;
      description: string;
      url: string;
      category: string;
      language: string;
      country: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  },
}