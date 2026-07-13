export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl?: string;
}

export type NewsData = NewsItem[];