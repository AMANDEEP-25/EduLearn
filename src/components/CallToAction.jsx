import React from "react";
import { Button } from "./ui/Button";

export default function CallToAction() {
  return (
    <section
      style={{
        width: "100%",
        padding: "3rem 1rem",
        backgroundColor: "#3b82f6",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Start Your Learning Journey Today
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            opacity: 0.9,
          }}
        >
          Join thousands of learners and advance your skills with our online
          courses.
        </p>
        <Button
          style={{
            backgroundColor: "white",
            color: "#3b82f6",
            padding: "0.75rem 1.5rem",
            fontSize: "1.125rem",
          }}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
