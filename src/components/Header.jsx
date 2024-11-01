import React from "react";
import { Button } from "./ui/Button";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "4rem",
          alignItems: "center",
          padding: "0 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "inherit",
          }}
        >
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
        </a>
        <nav style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Courses
          </a>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            About
          </a>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Contact
          </a>
        </nav>
        <Button
          variant="outline"
          style={{ marginLeft: "1rem", color: "white" }}
        >
          Log in
        </Button>
        <Button style={{ marginLeft: "0.5rem", color: "white" }}>
          Sign up
        </Button>
      </div>
    </header>
  );
}
