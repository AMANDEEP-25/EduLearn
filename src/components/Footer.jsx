import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "1.5rem 1rem",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>

          <span style={{ fontWeight: "bold" }}>EduLearn</span>
        </div>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              color: "#4b5563",
              textDecoration: "none",
            }}
          >
            Terms of Service
          </a>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              color: "#4b5563",
              textDecoration: "none",
            }}
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
