# 📦 E-commerce API

This project provides a RESTful API for an e-commerce application.  
All routes are prefixed with `/api/`.  
Authentication is required for **cart, cart-items, orders, and order-items** endpoints.

---

## 🗂 Categories
- **GET** `/api/categories/` → List all categories  
- **POST** `/api/categories/` → Create a new category  
- **GET** `/api/categories/{slug}/` → Get single category (by slug)  
- **PUT/PATCH** `/api/categories/{slug}/` → Update category  
- **DELETE** `/api/categories/{slug}/` → Delete category  

---

## 🛍 Products
- **GET** `/api/products/` → List all products  
- **POST** `/api/products/` → Create product *(auth required)*  
- **GET** `/api/products/{id}/` → Get single product by ID  
- **PUT/PATCH** `/api/products/{id}/` → Update product  
- **DELETE** `/api/products/{id}/` → Delete product  

---

## 🛒 Cart
- **GET** `/api/cart/` → Get logged-in user’s cart  
- **POST** `/api/cart/` → Create a cart *(auto-assigns to user)*  

---

## 🧾 Cart Items
- **GET** `/api/cart-items/` → List items in logged-in user’s cart  
- **POST** `/api/cart-items/` → Add item to cart  
- **PUT/PATCH** `/api/cart-items/{id}/` → Update item quantity  
- **DELETE** `/api/cart-items/{id}/` → Remove item  

---

## 📦 Orders
- **GET** `/api/orders/` → List logged-in user’s orders  
- **POST** `/api/orders/` → Create an order (from cart)  
- **GET** `/api/orders/{id}/` → View single order  
- **PUT/PATCH** `/api/orders/{id}/` → Update order status *(admin use)*  
- **DELETE** `/api/orders/{id}/` → Delete order  

---

## 📑 Order Items
- **GET** `/api/order-items/` → List items for logged-in user’s orders  
- **POST** `/api/order-items/` → Add new order item *(auto on checkout)*  
- **GET** `/api/order-items/{id}/` → View one order item  
- **PUT/PATCH** `/api/order-items/{id}/` → Update order item  
- **DELETE** `/api/order-items/{id}/` → Remove order item  

---

## ✅ Notes
- Replace `{id}` with the actual resource ID (e.g., `/api/products/1/`).  
- Replace `{slug}` with the category slug (e.g., `/api/categories/mens-fashion/`).  
- Authentication (JWT or session-based) is required for **Cart, Orders, and related endpoints**.  

