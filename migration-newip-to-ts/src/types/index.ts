export interface INewsAPI {
  status: string;
  totalResults: number;
  sources: [{
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string,
  }];
  articles: [{
    sources: {
      id: string,
      name: string,
      description: string,
      url: string,
      category: string,
      language: string,
      country: string,
    };
    id: string,
    name: string,
    category: string,
    language: string,
    country: string,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
  }],
}