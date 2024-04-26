"use client";
import Container from "@/components/Container";
import * as React from "react";

interface IConsultationProps {}

const Consultation: React.FunctionComponent<IConsultationProps> = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);
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

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? "#b57630" : "#6a411c",
  };

  const textAlignStyle: React.CSSProperties = {
    textAlign: isMobile ? "center" : "left",
  };

  return (
    <section
      id="consultation"
      style={{
        backgroundColor: "#166432",
      }}
      className="block lg:block md:hidden py-12"
    >
      <Container>
        <div className="" style={{ backgroundColor: "#166432" }}>
          <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#b57630] pl-4">
            Request a Free Consultation
          </h2>
          <p
            className="text-white mb-8"
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            Embark on your legal journey with confidence by starting with a free
            consultation. This no-obligation conversation is your first step
            towards understanding your rights and options. Our experts are here
            to listen to your story, assess your case, and provide initial
            guidance on the best path forward.
          </p>
          <div
            style={{
              paddingLeft: isMobile ? "1rem" : "none",
              paddingRight: isMobile ? "1rem" : "none",
            }}
          >
            <form>
              <div className="flex mb-4 justify-center space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex mb-4 justify-center space-x-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div style={textAlignStyle}>
                <button
                  style={buttonStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="text-white px-4 py-2 mt-5 rounded-md transition duration-300"
                >
                  SUBMIT MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Consultation;
