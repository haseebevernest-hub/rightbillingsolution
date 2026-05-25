export interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: any;
  content: any[];
  publishedAt: string;
}