import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <div className="cart-container">
      <h2 className="title">Cart</h2>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-card" key={item._id}>
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>Qty: {item.qty}</p>
              <p>₹{item.price}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <h3>Total: ₹{totalPrice}</h3>

        <Link to="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
}
