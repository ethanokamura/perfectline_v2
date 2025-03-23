export type Page = {
  slug: string;
  title: string;
  description: string;
  course: string;
  tags: string [];
  published: boolean;
  lang: string;
  order: number;
  content: string;
  youtubeId?: string;
  vimeoId?: string;
};