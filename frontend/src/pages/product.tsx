import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import { NavigationBar } from "../components/navbar";
import { ProductContext } from "../context/ProductContxt";
import { ProductProvider } from "../context/ProductProvider";

export function ProductPage() {
  

  return (
    <>    
        <NavigationBar/>
        <ProductProvider>
            <Item/>
        </ProductProvider>
    </>
  );
}


export function Item() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { products } = useContext(ProductContext); // <-- destructure correctly

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <main className="flex-1 bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Product Image */}
            <img
              src={product.img}  // <-- fixed property
              alt={product.name}
              className="w-full rounded-2xl shadow-md"
            />

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.description}</p>
              <p className="text-3xl font-semibold text-green-600">${product.price}</p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <Button color="light" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                  -
                </Button>
                <span className="text-xl">{quantity}</span>
                <Button color="light" onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </Button>
              </div>

              {/* Add to Cart */}
              <Button size="xl" color="blue" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
