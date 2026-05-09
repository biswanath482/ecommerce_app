import axios from "axios";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { userToken } = useAuth();

  const placeOrder = async () => {
    await axios.post(
      "http://localhost:5000/api/orders",
      {
        items: cartItems,
        total: totalPrice,
      },
      {
        headers: {
          Authorization: userToken,
        },
      },
    );

    clearCart();
    alert("Order Placed");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2 className="title">Checkout</h2>

        <div className="summary">
          <h3>Total ₹{totalPrice}</h3>
        </div>

        <button className="confirm-btn" onClick={placeOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
