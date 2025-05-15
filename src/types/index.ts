export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  ageGroup: string;
  pages: number;
  publisher: string;
  year: number;
  description: string;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  category: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}