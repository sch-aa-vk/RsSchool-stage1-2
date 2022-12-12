import { IArticles } from "./articles";
import { ISources } from "./sources";

export interface INewsAPI {
  status: string;
  totalResults: number;
  articles: [IArticles];
  sources: [ISources];
}