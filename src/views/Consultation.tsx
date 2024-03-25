"use client";
import Container from "@/components/Container";
import * as React from "react";

interface IConsultationProps {}

const Consultation: React.FunctionComponent<IConsultationProps> = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? "#b57630" : "#6a411c",
  };

  return (
    <section id="consultation" className="bg-[#166432] py-12 px-4 md:px-0">
      <Container>
        <div className="p-8 rounded-lg bg-[#166432]">
          <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#b57630] pl-4">
            Request a Free Consultation
          </h2>
          <p className="text-white mb-8 pl-4">
            Embark on your legal journey with confidence by starting with a free consultation. This no-obligation conversation is your first step towards understanding your rights and options. Our experts are here to listen to your story, assess your case, and provide initial guidance on the best path forward.
          </p>
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
            <div className="text-center sm:text-left">
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
      </Container>
    </section>
  );
};

export default Consultation;