import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form,
      );

      login(res.data.token);
      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Login</h2>

        <form className="form" onSubmit={submitHandler}>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={changeHandler}
            required
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={changeHandler}
            required
          />

          <button className="btn" type="submit">
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
