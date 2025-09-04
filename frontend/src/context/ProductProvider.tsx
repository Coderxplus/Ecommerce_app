import { useState, ReactNode } from "react";
import { ProductContext, Product } from "./ProductContxt";

type Props = {
  children: ReactNode;
};

export function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>([
    { id:1, name: "Nintendo Wii U", img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Wii_U_Console_and_Gamepad.png", price:1500 },
    { id:2, name: "Computer Monitor", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Computer_monitor_remix_transparent.png", price: 3000 },
    { id:3, name: "Radeon R9 Graphics Card", img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sapphire_Radeon_R9_290X-front_oblique_PNr%C2%B00437_remix_transparent.png",price:5000 },
    { id:4, name: "Laptop Hard Drive", img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Laptop-hard-drive-exposed_remix_transparent.png", price:10000 },
    { id:5, name: "Semi-Dry Suit", img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Semi_dry_suit_-_2604.png", price:15000 },
  ]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
