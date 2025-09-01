import { useState } from "react";
import { Form, useActionData } from "@remix-run/react";
import { account } from "../utils/appwrite.server";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";

// Server-side action (simplified)
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await account.create("unique()", email, password);
    return redirect("/todolist");
  } catch (err: any) {
    let message = "Signup failed";
    let parsed: any = null;

    try {
      parsed = JSON.parse(err.response);
      if (parsed.message) message = parsed.message;
    } catch {}

    if (err.code === 409 || (parsed && parsed.message.includes("already exists"))) {
      message = "User with this email already exists.";
    }

    return json({ error: message }, { status: 400 });
  }
}

export default function Signup() {
  const actionData = useActionData<{ error?: string }>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          width: "350px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Sign Up</h2>

        {actionData?.error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "15px" }}>
            {actionData.error}
          </p>
        )}

        <Form method="post">
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#4facfe",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </Form>
      </div>
    </div>
  );
}