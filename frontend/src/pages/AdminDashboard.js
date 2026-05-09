import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const { userToken } = useAuth();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/products", form, {
      headers: {
        Authorization: userToken,
      },
    });

    alert("Product Added");
  };

  return (
    <div className="admin-container">
      <div className="card">
        <h2 className="title">Admin Dashboard</h2>

        <form className="form" onSubmit={submitHandler}>
          <input
            className="input"
            placeholder="Product Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="input"
            placeholder="Price"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input
            className="input"
            placeholder="Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <input
            className="input"
            placeholder="Stock"
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
          />

          <button className="btn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
