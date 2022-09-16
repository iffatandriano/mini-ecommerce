export type Products = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductDetailsResponses = Products;

export type ProductHomesParams = {
  limit: number;
};

export type ProductResponses = {
  products: Products[];
};

export type CategoriesResponses = {
  category: String[];
};

export type CategoriesSidebarResponses = String[];
