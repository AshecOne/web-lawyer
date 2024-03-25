import * as React from "react";
import Container from "@/components/Container";
import { FaHandPointRight, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = ({}) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <section id="hero" className="bg-black">
      <div
        style={{
          backgroundImage: `url(${isMobile ? "/hero2.jpg" : "/hero.jpg"})`,
          height: isMobile ? "500px" : "720px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative flex items-center justify-end w-full"
      >
        <Container>
          <div
            className={`${
              isMobile
                ? "none"
                : "absolute right-0 w-1/2 transform translateX(-20%)"
            }`}
            style={{
              backgroundColor: "rgba(9, 36, 21, 0.8)",
              borderRadius: "8px",
              width: isMobile ? "100%" : "550px",
              height: isMobile ? "auto" : "300px",
              bottom: isMobile ? "none" : "60px",
              transform: isMobile ? "translateY(30%)" : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "2rem",
            }}
          >
            <div className="flex items-center mb-6">
              <h1
                className={`font-bold mr-4 text-white ${
                  isMobile ? "text-xl" : "text-2xl"
                }`}
              >
                Speedy Justice for You
              </h1>
              <FaHandPointRight size={isMobile ? 20 : 24} color="#b57630" />
            </div>
            <div
              style={{
                width: isMobile ? "30px" : "50px",
                height: "2px",
                backgroundColor: "#b57630",
                marginBottom: "1.5rem",
              }}
            ></div>
            <p
              className={`mb-8 text-white ${
                isMobile ? "text-sm" : "text-base"
              }`}
            >
              {`Our law firm stands at the forefront of providing prompt, personalized legal solutions. Merging professionalism with accessibility, we navigate each client through their journey to justice, ensuring clarity and efficiency every step of the way.`}
            </p>
            <button className="bg-transparent border-none text-white underline font-bold p-0 cursor-pointer flex items-center">
              <a className={isMobile ? "text-sm" : "text-base"} href="/teams">
                Contact Our Attorneys
              </a>
              <FaArrowRight
                size={isMobile ? 12 : 16}
                style={{ marginLeft: "5px" }}
              />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
