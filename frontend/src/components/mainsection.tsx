import { useState, useContext } from "react";
import { ProductCard } from "./productcard";
import { ProductContext } from "../context/ProductContext";
import { CartProvider } from "../context/CartProvider";

export function MainSection() {
  return (
    <main className="flex-1 bg-gray-50 p-6">
      {/* Product Grid */}
      <ProductGrid />
    </main>
  );
}

export function ProductGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("ProductGrid must be used inside ProductProvider");
  }

  const { products } = context;

  // Filter products dynamically
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <CartProvider key={product.id}>
            <ProductCard
              name={product.name}
              img={product.image}
              price={product.price}
              id={product.id}
            />
          </CartProvider>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
}
