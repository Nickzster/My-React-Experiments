export interface CardData {
  image: string;
  description: string;
  title?: string;
  url?: string;
}

export interface SplitterData {
  title: string;
  description: string;
  image: string;
  cta: string;
}

export interface UserData {
  results: Array<Object>;
}
