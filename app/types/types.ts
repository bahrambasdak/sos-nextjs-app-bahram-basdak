export interface ArticleType {
  id: string;   // id of the article
  title: string;   // title of the article
  summary: string;   // summary of the article
  image: string;   // image of the article
  period: string;   // period of the article
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}