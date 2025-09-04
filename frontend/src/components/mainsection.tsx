import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { ProductCard } from "./productcard";

export function MainSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { name: "Nintendo Wii U", img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Wii_U_Console_and_Gamepad.png" },
    { name: "Computer Monitor", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Computer_monitor_remix_transparent.png" },
    { name: "Radeon R9 Graphics Card", img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sapphire_Radeon_R9_290X-front_oblique_PNr%C2%B00437_remix_transparent.png" },
    { name: "Laptop Hard Drive", img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Laptop-hard-drive-exposed_remix_transparent.png" },
    { name: "Semi-Dry Suit", img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Semi_dry_suit_-_2604.png" },
  ];

  // Filter products dynamically
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <main className="flex-1 bg-gray-50 p-6">
      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} name={product.name} img={product.img} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </main>
  );
}
