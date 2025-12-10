import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../utils/api";

export default function Products({ cart, setCart }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleAddToCart = (product) => {
    if (!user) {
      alert("You must login first!");
      navigate("/login");
      return;
    }
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const handleView = (id) => {
    if (!user) {
      alert("You must login first!");
      navigate("/login");
      return;
    }
    navigate(`/product/${id}`);
  };

  const handleBuyNow = (id) => {
    if (!user) {
      alert("You must login first!");
      navigate("/login");
      return;
    }
    navigate(`/buynow/${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mt-2 rounded"
            />
            <p className="mt-2">Price: ₹ {product.price}</p>
            <p className="text-gray-600">{product.description}</p>

            {/* Buttons */}
            <div className="mt-2 flex gap-2 flex-wrap">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>

              <button
                onClick={() => handleView(product.id)}
                className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
              >
                View
              </button>

              <button
                onClick={() => handleBuyNow(product.id)}
                className="bg-yellow-500 text-black px-3 py-2 rounded hover:bg-yellow-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
