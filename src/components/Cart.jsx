// src/components/Cart.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Check login

  // Remove a single item
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Buy all items in cart
  const handleBuyAll = () => {
    if (!user) {
      alert("You must be logged in to buy items!");
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    let message = "Purchase confirmed for:\n\n";
    cart.forEach((item) => {
      message += `${item.name} - ₹${item.price}\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\nTotal: ₹${total}`;

    alert(message);

    // Clear cart after purchase
    setCart([]);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Price: ₹ {item.price}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => {
                      if (!user) {
                        alert("You must be logged in to buy items!");
                        navigate("/login");
                        return;
                      }
                      navigate(`/buynow/${item.id}`);
                    }}
                    className="bg-yellow-500 text-black px-3 py-2 rounded hover:bg-yellow-600"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Buy All Button */}
          <div className="mt-6 text-right">
            <button
              onClick={handleBuyAll}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Buy All ({cart.length} items)
            </button>
          </div>
        </>
      )}
    </div>
  );
}
