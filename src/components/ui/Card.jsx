import React from "react";

export function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div style={{ padding: "1.5rem 1.5rem 0" }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div style={{ padding: "1rem 1.5rem" }}>{children}</div>;
}

export function CardFooter({ children }) {
  return <div style={{ padding: "0 1.5rem 1.5rem" }}>{children}</div>;
}

export function CardTitle({ children }) {
  return (
    <h3
      style={{
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children }) {
  return <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{children}</p>;
}
