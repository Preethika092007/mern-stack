import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../utils/api";

export default function BuyNow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  const handleQtyChange = (e) => {
    const v = Number(e.target.value);
    if (v >= 1) setQty(v);
  };

  const total = (product.price * qty).toFixed(2);

  const handleConfirmPurchase = () => {
    // simulate purchase
    alert(`Purchase confirmed!\n\n${product.name} x ${qty}\nTotal: ₹ ${total}`);
    // optional: you could clear cart or add logic here
    navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Buy Now</h2>

      <div className="flex flex-col md:flex-row gap-6 border p-4 rounded shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-64 h-64 object-cover rounded"
        />

        <div className="flex-1">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="mt-2 text-gray-600">{product.description}</p>

          <p className="mt-4 text-lg">Price: ₹ {product.price}</p>

          <div className="mt-4 flex items-center gap-3">
            <label className="font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={handleQtyChange}
              className="w-20 border rounded px-2 py-1"
            />
          </div>

          <p className="mt-4 text-xl font-semibold">Total: ₹ {total}</p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleConfirmPurchase}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Confirm Purchase
            </button>

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
