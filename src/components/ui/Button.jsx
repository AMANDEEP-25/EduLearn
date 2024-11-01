import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "default",
  ...props
}) {
  const baseStyle = {
    padding: size === "lg" ? "0.75rem 1.5rem" : "0.5rem 1rem",
    fontSize: size === "lg" ? "1.125rem" : "1rem",
    fontWeight: "bold",
    borderRadius: "0.375rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const variantStyle =
    variant === "primary"
      ? {
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
        }
      : {
          backgroundColor: "transparent",
          color: "#3b82f6",
          border: "1px solid #3b82f6",
        };

  return (
    <button style={{ ...baseStyle, ...variantStyle }} {...props}>
      {children}
    </button>
  );
}
