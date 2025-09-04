import { useState } from "react";
import { NavigationBar } from "../components/navbar";
import { Button, List, ListItem } from "flowbite-react";
import { HiOutlineTrash } from "react-icons/hi";
import { FooterSection } from "../components/footer";

export function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 100, quantity: 1, img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Wii_U_Console_and_Gamepad.png" },
    { id: 2, name: "Product B", price: 200, quantity: 1, img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Wii_U_Console_and_Gamepad.png" },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <NavigationBar />
      <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
  <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-6 w-800 max-w-lg">
    <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        Your Cart
        <svg
            className="w-6 h-6 text-black-800 size-lg dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
            fillRule="evenodd"
            d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
            />
        </svg>
    </h1>


    {/* Cart Items */}
    <List unstyled className="divide-y divide-gray-200 dark:divide-gray-700">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onIncrease={() => increaseQty(item.id)}
          onDecrease={() => decreaseQty(item.id)}
          onRemove={() => removeItem(item.id)}
        />
      ))}
    </List>

    {/* Checkout Section */}
    <div className="mt-auto bg-gray-50 p-4 shadow-sm-light rounded-lg flex justify-between items-center">
      <span className="font-bold text-lg">Total: ${total}</span>
      <Button className="w-md">Checkout</Button>
    </div>
  </div>
</div>
<FooterSection/>
    </>
  );
}

export function CartItem({ img, name, price, quantity, onIncrease, onDecrease, onRemove }) {
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
            <Button size="xs" onClick={onDecrease}>-</Button>
            <span>{quantity}</span>
            <Button size="xs" onClick={onIncrease}>+</Button>
          </div>
        </div>

        {/* Remove Button */}
        <div className="flex flex-col items-end">
          <span className="text-base font-semibold text-gray-900 dark:text-white">${price * quantity}</span>
          <button onClick={onRemove} className="text-red-500 hover:text-red-700 mt-2">
            <HiOutlineTrash size={20} />
          </button>
        </div>
      </div>
    </ListItem>
  );
}
