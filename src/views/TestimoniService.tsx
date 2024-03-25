"use client";
import * as React from "react";
import Container from "@/components/Container";

interface ITestimoniServiceProps {}

const TestimoniService: React.FunctionComponent<ITestimoniServiceProps> = (
  props
) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#092415",
        color: "white",
        padding: isMobile ? "2rem 1rem" : "4rem 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            marginBottom: "4rem",
            padding: isMobile ? "0 1rem" : 0,
          }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "50%",
              paddingRight: isMobile ? 0 : "2rem",
              marginBottom: isMobile ? "2rem" : 0,
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Another Satisfied Client
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              {`"When legal trouble loomed, Saul Goodman was there with the
              expertise and resolve to navigate the storm. His tactical approach
              not only cleared my path but ensured I understood every step we
              took. The outcome was more than just favorable—it was a complete
              turnaround from where I started."`}
            </p>
            <p style={{ marginBottom: "2rem" }}>
              {`"Badger" couldn't believe the exceptional dedication and insight
              Saul brought to the table, turning a dire situation into a success
              story. It's more than legal service; it's a commitment to justice
              and client well-being that sets Saul apart."`}
            </p>
          </div>
          <div
            style={{
              width: isMobile ? "100%" : "50%",
              padding: isMobile ? "0 1rem" : 0,
            }}
          >
            <div
              style={{
                paddingBottom: "56.25%",
                position: "relative",
                marginBottom: "1rem",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Db-RFNJDO3s"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              ></iframe>
            </div>
            <a
              href="https://www.youtube.com/embed/Db-RFNJDO3s"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#6a411c",
                color: "white",
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
            >
              Watch Video
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            padding: isMobile ? "0 1rem" : 0,
          }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "50%",
              paddingRight: isMobile ? 0 : "2rem",
              marginBottom: isMobile ? "2rem" : 0,
              order: isMobile ? 2 : 1,
            }}
          >
            <div
              style={{
                paddingBottom: "56.25%",
                position: "relative",
                marginBottom: "1rem",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/P-nhEHXQcTs"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              ></iframe>
            </div>
            <a
              href="https://www.youtube.com/embed/P-nhEHXQcTs"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#6a411c",
                color: "white",
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
            >
              Watch Video
            </a>
          </div>
          <div
            style={{
              width: isMobile ? "100%" : "50%",
              paddingLeft: isMobile ? 0 : "2rem",
              marginBottom: isMobile ? "2rem" : 0,
              order: isMobile ? 1 : 2,
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              Another Satisfied Client
            </h3>
            <div
              style={{ borderLeft: "4px solid #6a411c", paddingLeft: "1.5rem" }}
            >
              <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
                {`"In a legal landscape that seemed daunting, Saul Goodman was a beacon of clarity and strategy. His expertise turned the tide in my case, offering a tailored approach that spoke volumes of his dedication to justice and client success."`}
              </p>
              <p style={{ fontWeight: "bold" }}>Wendy S.</p>
              <p style={{ color: "#9ca3af" }}>Hooker</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimoniService;
