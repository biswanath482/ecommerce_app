import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { cartItems } = useCart();
  const { userToken, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link className="logo" to="/">
          Shop
        </Link>
      </div>

      <div className="nav-right">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          Cart <span className="badge">{cartItems.length}</span>
        </Link>

        {userToken ? (
          <>
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
