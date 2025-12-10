import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !email) return alert("Enter both username and email");

    const userData = { username, email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

    navigate("/");
  };

  // --- Inline CSS objects ---
  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eff6f4ff, #eef0f6ff)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const titleStyle = {
    fontSize: "28px",
    color: "#333",
    marginBottom: "30px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "12px 15px",
    marginTop: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    backgroundColor: "#6c63ff",
    color: "#fff",
    fontSize: "16px",
    padding: "12px 0",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "20px",
    width: "100%",
    transition: "all 0.3s ease",
  };

  const footerStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#888",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Welcome Back</h2>

        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <label style={{ display: "flex", flexDirection: "column", textAlign: "left", fontWeight: 500, color: "#555" }}>
            Username
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </label>
          <br/>

          <label style={{ display: "flex", flexDirection: "column", textAlign: "left", fontWeight: 500, color: "#555" }}>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </label><br/>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#574bff")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#6c63ff")}
          >
            Login
          </button>
        </form>

        
      </div>
    </div>
  );
}
