"use client";
import * as React from "react";
import Container from "@/components/Container";
import { FaArrowRight, FaHandPointRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

interface IOverviewProps {}

interface HoverState {
  [key: string]: boolean;
}

const Overview: React.FunctionComponent<IOverviewProps> = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isHovered, setIsHovered] = React.useState<{ [key: string]: boolean }>(
    {}
  );

  const handleMouseEnter = (id: string) =>
    setIsHovered({ ...isHovered, [id]: true });
  const handleMouseLeave = (id: string) =>
    setIsHovered({ ...isHovered, [id]: false });

  return (
    <section
      id="overview"
      style={{ backgroundColor: "#092415", color: "white" }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {!isMobile && (
            <div style={{ width: "50%", position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "680px",
                  paddingTop: "56.25%",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "640px",
                    backgroundImage: "url('/building.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(9, 36, 21, 0.8)",
                    borderRadius: "8px",
                    width: "400px",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #b57630",
                  }}
                >
                  <img
                    src="/icon1.png"
                    alt="Icon 1"
                    style={{ marginBottom: "1rem" }}
                  />
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      color: "#fff",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {"Let's Win Your Case"}
                  </h2>
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor: "#b57630",
                      marginBottom: "1rem",
                    }}
                  ></div>
                  <p
                    style={{
                      marginBottom: "2rem",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {`Unlock your legal potential with our seasoned attorneys. We're not just about law; we're about your victory. With every case we take on, we bring a blend of grit, wit, and relentless dedication. We know the law, and we're here to make it work for you. Discover our unique approach to winning your case and see what sets us apart.`}
                  </p>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#b57630",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      padding: 0,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>
                      Learn More About Us
                    </span>
                    <FaArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                  </button>
                </div>
              </div>
            </div>
          )}
          <div
            style={{
              width: isMobile ? "100%" : "50%",
              padding: isMobile ? "0" : "2rem",
              paddingTop: isMobile ? "3rem" : "0",
              paddingBottom: isMobile ? "3rem" : "0",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                color: "white",
                fontWeight: "bold",
                marginBottom: "2rem",
                borderLeft: "4px solid #b57630",
                paddingLeft: "1rem",
                marginTop: isMobile ? "0" : "2rem",
              }}
            >
              Why Choose Our Legal Services
            </h2>
            <p
              className="text-white"
              style={{
                marginBottom: isMobile ? "2rem" : "2rem",
                paddingLeft: "1rem",
              }}
            >
              Choosing our legal services means entrusting your case to a team
              renowned for precision, dedication, and a personalized approach
              that targets your specific legal goals with clarity and
              effectiveness.
            </p>
            <div style={{ marginBottom: "2rem", position: "relative" }}>
              <img
                src="/icon3.png"
                alt="Icon 1"
                onMouseEnter={() => handleMouseEnter("icon1")}
                onMouseLeave={() => handleMouseLeave("icon1")}
                style={{
                  position: isMobile ? "static" : "absolute",
                  left: isMobile ? "0" : "-70px",
                  top: isMobile ? "0" : "10%",
                  transform: isMobile
                    ? "none"
                    : isHovered["icon1"]
                    ? "scale(1.1)"
                    : "none",
                  marginRight: isMobile ? "0.5rem" : "0",
                  zIndex: 2,
                  transition: "transform 0.3s ease",
                }}
              />
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#b57630",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  paddingLeft: isMobile ? "1rem" : "40px",
                  display: isMobile ? "flex" : "block",
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                Experienced Attorneys
              </h3>
              <p
                style={{
                  color: "white",
                  paddingLeft: isMobile ? "1rem" : "40px",
                }}
              >
                {`Our team of attorneys brings a wealth of experience to the table. They're battle-tested, sharp-minded, and deeply committed to our clients' causes. Their profound legal expertise and proactive approach pave the way for success in even the most complex cases."`}
              </p>
            </div>
            <div style={{ marginBottom: "2rem", position: "relative" }}>
              <img
                src="/icon2.png"
                alt="Icon 2"
                onMouseEnter={() => handleMouseEnter("icon2")}
                onMouseLeave={() => handleMouseLeave("icon2")}
                style={{
                  position: isMobile ? "relative" : "absolute",
                  left: isMobile ? "10px" : "-60px",
                  top: isMobile ? "0" : "0",
                  transform: isMobile
                    ? "none"
                    : isHovered["icon2"]
                    ? "scale(1.1)"
                    : "none",
                  marginRight: isMobile ? "0.5rem" : "0",
                  zIndex: 2,
                  transition: "transform 0.3s ease",
                }}
              />
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#b57630",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  paddingLeft: isMobile ? "1rem" : "40px",
                  display: isMobile ? "flex" : "block",
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                Best Case Strategies
              </h3>
              <p
                style={{
                  color: "white",
                  paddingLeft: isMobile ? "1rem" : "40px",
                }}
              >
                We approach each case with a tailor-made strategy, combining
                thorough research, innovative tactics, and deep legal acumen.
                Our strategies are designed to position your case in the best
                light, ensuring a robust and compelling argument in any legal
                setting.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="/icon.png"
                alt="Icon 3"
                onMouseEnter={() => handleMouseEnter("icon3")}
                onMouseLeave={() => handleMouseLeave("icon3")}
                style={{
                  position: isMobile ? "relative" : "absolute",
                  left: isMobile ? "10px" : "-60px",
                  top: isMobile ? "0" : "0",
                  transform: isMobile
                    ? "none"
                    : isHovered["icon3"]
                    ? "scale(1.1)"
                    : "none",
                  marginRight: isMobile ? "0.5rem" : "0",
                  zIndex: 2,
                  transition: "transform 0.3s ease",
                }}
              />
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#b57630",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  paddingLeft: isMobile ? "1rem" : "40px",
                  display: isMobile ? "flex" : "block",
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                With You - From Start to Finish
              </h3>
              <p
                style={{
                  color: "white",
                  paddingLeft: isMobile ? "1rem" : "40px",
                }}
              >
                {`Our commitment extends beyond legal advice. We journey with you from the initial consultation until the final verdict, providing guidance, support, and insight every step of the way. We're not just your attorneys; we're your steadfast partners in the pursuit of justice.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Overview;
