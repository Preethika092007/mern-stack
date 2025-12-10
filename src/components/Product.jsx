import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../utils/api";

export default function Product({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-blue-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      alert("You must login first!");
      navigate("/login");
      return;
    }
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const handleBuyNow = () => {
    if (!user) {
      alert("You must login first!");
      navigate("/login");
      return;
    }
    navigate(`/buynow/${product.id}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-600 underline"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-6 border p-6 rounded shadow">
        <div className="md:w-1/2 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-3 text-gray-700">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold">₹ {product.price}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
            >
              Buy Now
            </button>

            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
