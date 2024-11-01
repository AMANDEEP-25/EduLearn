import React from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                lineHeight: "1.2",
                marginBottom: "1rem",
              }}
            >
              Learn Anytime, Anywhere
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Discover a world of knowledge with our interactive online courses.
              Start your learning journey today!
            </p>
          </div>
          <div style={{ width: "100%", maxWidth: "24rem" }}>
            <form style={{ display: "flex", gap: "0.5rem" }}>
              <Input
                placeholder="Search courses"
                type="text"
                style={{ flex: 1 }}
              />
              <Button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "0.5rem" }}
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
