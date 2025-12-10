import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Cart from "./components/Cart";
import Product from "./components/Product";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./components/Products";

export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
        <Link to="/" className="font-bold text-xl"><h1>
          MERN Ecommerce Project</h1>
        </Link>

        {user ? (
          <div className="flex gap-4 items-center">
            <Link to="/cart" className="text-blue-600 font-semibold">
              Cart ({cart.length})
            </Link>
            <span className="font-medium">Hello, {user.username}</span>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        )}
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute user={user}>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={<Product cart={cart} setCart={setCart} />}
          />
          <Route
            path="/buynow/:id"
            element={
              <ProtectedRoute user={user}>
                <BuyNow />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </main>
    </div>
  );
}
