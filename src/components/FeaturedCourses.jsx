import React from "react";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";

const courses = [
  { title: "Web Development", description: "Learn HTML, CSS, and JavaScript" },
  { title: "Data Science", description: "Master Python and Machine Learning" },
  { title: "Digital Marketing", description: "Boost your online presence" },
];

export default function FeaturedCourses() {
  return (
    <section
      style={{
        width: "100%",
        padding: "3rem 1rem",
        backgroundColor: "#f3f4f6",
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
          Featured Courses
        </h2>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>4.5 ★★★★☆ (2,567 ratings)</p>
              </CardContent>
              <CardFooter>
                <Button style={{ width: "100%", color: "white" }}>
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
