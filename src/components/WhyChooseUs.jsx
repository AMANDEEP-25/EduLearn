import React from "react";

const features = [
  {
    icon: "📚",
    title: "Diverse Courses",
    description: "Choose from a wide range of subjects",
  },
  {
    icon: "👥",
    title: "Expert Instructors",
    description: "Learn from industry professionals",
  },
  {
    icon: "🏆",
    title: "Recognized Certificates",
    description: "Earn valuable credentials",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        width: "100%",
        padding: "3rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Why Choose EduLearn?
        </h2>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {feature.icon}
              </span>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#6b7280" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
