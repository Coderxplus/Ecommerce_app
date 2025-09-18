import { createContext } from "react";

// Define product type
export type Product = {
  id: number;
  name: string;
  description:string;
  img: string;
  price: number;
  stock: number;
  created_at:string;
  category:number;
};

// Define context type
export type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
};

// Create context with null default
export const ProductContext = createContext<ProductContextType | null>(null);
