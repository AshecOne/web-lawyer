"use client";
import Container from "@/components/Container";
import CardService from "@/components/CardService";
import * as React from "react";

interface IPracticeProps {}

const Practice: React.FunctionComponent<IPracticeProps> = (props) => {
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
      id="services"
      style={{
        backgroundColor: "#166432",
        paddingTop: isMobile ? "3rem" : "4rem",
        paddingBottom: isMobile ? "3rem" : "4rem",
      }}
    >
      <Container>
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              color: "white",
              fontWeight: "bold",
              marginBottom: "1rem",
              borderLeft: "4px solid #b57630",
              paddingLeft: "1rem",
            }}
          >
            Practice Areas
          </h2>
          <p
            className="text-white"
            style={{
              marginBottom: isMobile ? "1rem" : "3rem",
              paddingLeft: "1rem",
            }}
          >
            Our firm specializes in a broad spectrum of legal services, ensuring
            clients receive expert support in key areas:
          </p>
        </div>
        <div
          style={{
            display: isMobile ? "flex" : "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: isMobile ? "0" : "2rem",
            overflowX: isMobile ? "scroll" : "auto",
            paddingBottom: isMobile ? "1rem" : "0",
            paddingLeft: isMobile ? "2rem" : "0",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ flex: "0 0 300px", marginRight: "1rem" }}>
              <CardService
                icon="/burung.png"
                title="Civil Rights Law"
                description="Safeguarding individual freedoms and ensuring justice and equality."
              />
            </div>
            <div style={{ flex: "0 0 300px", marginRight: "1rem" }}>
              <CardService
                icon="/neraca.png"
                title="Corporate Law"
                description="Offering legal counsel for businesses on governance, compliance, and transactions."
              />
            </div>
            <div style={{ flex: "0 0 300px", marginRight: "1rem" }}>
              <CardService
                icon="/palu.png"
                title="Criminal Law"
                description="Providing robust defense and representation in criminal cases to protect rights."
              />
            </div>
            <div
              style={{
                flex: "0 0 300px",
                paddingRight: isMobile ? "2rem" : "0",
              }}
            >
              <CardService
                icon="/buku.png"
                title="Financial Law"
                description="Advising on financial transactions, regulations, and compliance for secure financial operations."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Practice;
