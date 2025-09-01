import { NavigationBar } from "../components/navbar";
import { Card, Button, ListGroup } from "flowbite-react";

export function Cart() {
    const cartItems = [
        { id: 1, name: "Product A", price: 100 },
        { id: 2, name: "Product B", price: 200 },
    ];

    return (
        <div>
            <NavigationBar />
        </div>
    );
}

export function CartItem({ img, name, price }) {
    return (
        <ListGroup className="flex justify-between items-center">
            <span className=""></span>
            <span className="font-medium">{name}</span>
            <span className="text-gray-700">${price}</span>
        </ListGroup>
    );
}
