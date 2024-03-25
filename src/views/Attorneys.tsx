"use client";
import Container from "@/components/Container";
import * as React from "react";
import Member from "@/components/CardTeam";
import { useMediaQuery } from "react-responsive";

interface IAttorneysProps {}

const Attorneys: React.FunctionComponent<IAttorneysProps> = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? "#b57630" : "#6a411c",
  };

  const textAlignStyle: React.CSSProperties = {
    textAlign: isMobile ? "center" : "left",
  };

  const membersData = [
    {
      name: "Saul Goodman",
      position: "Elder Law",
      image: "/saul.jpg",
      description:
        "Known for his unconventional approach, Saul has a reputation for championing the underserved communities.",
      socialLinks: {
        twitter: "https://twitter.com/saulgoodman",
        facebook: "https://facebook.com/saulgoodman",
        linkedin: "https://linkedin.com/in/saulgoodman",
      },
    },
    {
      name: "Kim Wexler",
      position: "Corporate Law",
      image: "/kim.webp",
      description:
        "With a detail-oriented mindset, Kim brings a wealth of knowledge and a strategic perspective to corporate law.",
      socialLinks: {
        twitter: "https://twitter.com/kimwexler",
        facebook: "https://facebook.com/kimwexler",
        instagram: "https://instagram.com/kimwexler",
      },
    },
    {
      name: "Charles McGill",
      position: "Intellectual Property",
      image: "/chuck.webp",
      description:
        "Charles's expertise in IP law is unmatched, offering clients comprehensive protection for their innovations.",
      socialLinks: {
        twitter: "https://twitter.com/charlesmcgill",
        linkedin: "https://linkedin.com/in/charlesmcgill",
      },
    },
    {
      name: "Howard Hamlin",
      position: "Employment Law",
      image: "/howard.webp",
      description:
        "Howard has an exceptional track record in employment law, with a focus on dispute resolution and mediation.",
      socialLinks: {
        twitter: "https://twitter.com/howardhamlin",
        facebook: "https://facebook.com/howardhamlin",
      },
    },
  ];

  return (
    <section
      id="attorneys"
      style={{
        backgroundColor: "#166432",
        padding: "0.5rem 0",
        paddingBottom: "3rem",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "1.5rem",
            color: "white",
            fontWeight: "bold",
            marginBottom: "2rem",
            borderLeft: "4px solid #b57630",
            paddingLeft: "1rem",
            marginTop: isMobile ? "2rem" : "4rem",
          }}
        >
          Dedicated Team of Attorneys
        </h2>
        <p
          style={{
            color: "white",
            marginBottom: isMobile ? "2rem" : "5rem",
            paddingRight: isMobile ? "2rem" : "none",
            paddingLeft: "1rem",
          }}
        >
          {`Meet our attorneys, a group of distinguished legal experts dedicated
          to delivering justice across a spectrum of specializations. They are
          the cornerstone of our firm's success, ready to guide you with
          experience and expertise.`}
        </p>
        <div
          style={{
            display: isMobile ? "block" : "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            overflowX: isMobile ? "scroll" : "hidden",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div
            style={{
              display: "flex",
              width: isMobile ? "max-content" : "100%",
              gap: isMobile ? "1rem" : "1.5rem",
              paddingLeft: isMobile ? "2rem" : "none",
            }}
          >
            {membersData.map((member, index) => (
              <Member
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                description={member.description}
                socialLinks={member.socialLinks}
              />
            ))}
            <div style={{ paddingRight: isMobile ? "2rem" : "0" }} />
          </div>
        </div>
        <hr style={{ borderTop: "1px solid #b57630", margin: "2rem 0" }} />
        <div style={textAlignStyle}>
          <h3
            style={{
              color: "white",
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "1rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Are you a law graduate? Apply for an internship with us
          </h3>
          <p
            style={{
              color: "white",
              marginBottom: "1.5rem",
              textAlign: isMobile ? "center" : "left",
              paddingLeft: isMobile ? "2rem" : "none",
              paddingRight: isMobile ? "2rem" : "none",
            }}
          >
            If you&apos;re pursuing a career in law, consider our internship
            program. It&apos;s a prime opportunity to gain valuable experience
            and learn from seasoned professionals in the field. Apply now to
            begin your journey in law.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "none",
              marginBottom: isMobile ? "0" : "2rem",
            }}
          >
            <button
              style={{
                ...buttonStyle,
                color: "white",
                padding: "0.5rem 0.5rem",
                marginTop: "1.25rem",
                borderRadius: "0.375rem",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              SUBMIT YOUR APPLICATION
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Attorneys;
