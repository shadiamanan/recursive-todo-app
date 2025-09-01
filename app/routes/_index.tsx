import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #ff6a00, #ee0979)", // colorful gradient
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Recursive Todo App</h2>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Welcome! Please{" "}
          <Link
            to="/signup"
            style={{
              color: "#ff6a00",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>{" "}
          first.
        </p>
      </div>
    </div>
  );
}