import { Card, Button } from "flowbite-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { Navigate } from "react-router-dom";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export function ProductCard({ id, name, price, img }: ProductCardProps) {
  console.log(img)
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      img,
      quantity: 1, 
    });
    Navigate("/cart")
  };

  return (
    <Card href={`/product/${id}`} className="max-w-sm" imgAlt={name} imgSrc={img}>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900">
        {name}
      </h5>

      {/* Price */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-bold text-gray-900">
          ${price}
        </span>

        {/* Add to cart button */}
        <Button color="cyan" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
