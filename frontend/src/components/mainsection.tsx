import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { ProductCard } from "./productcard";

export function MainSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching for:", searchQuery);
  };

  return (
    <main className="flex-1 bg-gray-50 p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <form className="flex gap-2" onSubmit={handleSearch}>
          <TextInput
            id="search"
            type="text"
            placeholder="Search products..."
            className="flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" color="blue">
            Search
          </Button>
        </form>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard name="" img= "https://upload.wikimedia.org/wikipedia/commons/4/4a/Wii_U_Console_and_Gamepad.png"/>
        <ProductCard name="" img= "https://upload.wikimedia.org/wikipedia/commons/f/f5/Computer_monitor_remix_transparent.png"/>
        <ProductCard name="" img= "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sapphire_Radeon_R9_290X-front_oblique_PNr%C2%B00437_remix_transparent.png" />
        <ProductCard name="" img= "https://upload.wikimedia.org/wikipedia/commons/3/32/Laptop-hard-drive-exposed_remix_transparent.png"/>
        <ProductCard name="" img = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Semi_dry_suit_-_2604.png"/>
       
      </div>
    </main>
  );
}
