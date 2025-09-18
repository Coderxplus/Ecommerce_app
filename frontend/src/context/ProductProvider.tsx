import { useState, ReactNode, useEffect } from "react";
import { ProductContext, Product } from "./ProductContext";
import { getProducts } from "../axios/product";

type Props = {
  children: ReactNode;
};

export function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        return res.data;
      })
    .then((data) => console.log(data)) 
    .catch((err) => console.error("Failed to fetch products:", err));
}, []);

  console.log(products)

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
