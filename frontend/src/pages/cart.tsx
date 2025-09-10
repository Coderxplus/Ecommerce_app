import { useContext } from "react";
import { NavigationBar } from "../components/navbar";
import { Button, List, ListItem } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";
import { FooterSection } from "../components/footer";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) return null; // safety

  const { cart, removeFromCart, updateQuantity, clearCart } = cartCtx;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <NavigationBar />
      <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-6 w-800 max-w-lg">
          <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
            Your Cart
          </h1>

          {/* Cart Items */}
          <List unstyled className="divide-y divide-gray-200 dark:divide-gray-700">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
          </List>

          {/* Checkout Section */}
          <div className="mt-auto bg-gray-50 p-4 shadow-sm-light rounded-lg flex justify-between items-center">
            <span className="font-bold text-lg">Total: ${total}</span>
            <Button className="w-md" onClick={clearCart}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

type CartItemProps = {
  img: string;
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export function CartItem({ img, name, price, quantity, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <ListItem className="flex justify-between items-center p-4 bg-white rounded-lg hover:shadow-lg hover:scale-[1.02] transition duration-300">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{name}</p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">Price: ${price}</p>

          {/* Quantity controls */}
          <div className="flex items-center gap-2 mt-2">
            <Button size="xs" onClick={onDecrease} disabled={quantity <= 1}>
              -
            </Button>
            <span>{quantity}</span>
            <Button size="xs" onClick={onIncrease}>+</Button>
          </div>
        </div>

        {/* Remove Button */}
        <div className="flex flex-col items-end">
          <span className="text-base font-semibold text-gray-900 dark:text-white">
            ${price * quantity}
          </span>
          <button onClick={onRemove} className="text-red-500 hover:text-red-700 mt-2">
            <HiOutlineTrash size={20} />
          </button>
        </div>
      </div>
    </ListItem>
  );
}
