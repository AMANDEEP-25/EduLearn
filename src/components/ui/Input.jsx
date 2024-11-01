import React from "react";

export function Input(props) {
  return (
    <input
      style={{
        width: "100%",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        borderRadius: "0.375rem",
        border: "1px solid #d1d5db",
        outline: "none",
      }}
      {...props}
    />
  );
}
