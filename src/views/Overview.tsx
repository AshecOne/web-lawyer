"use client";
import * as React from "react";
import Container from "@/components/Container";
import { FaArrowRight, FaHandPointRight } from "react-icons/fa";

interface IOverviewProps {}

interface HoverState {
  [key: string]: boolean;
}

const Overview: React.FunctionComponent<IOverviewProps> = (props) => {
  const [isHovered, setIsHovered] = React.useState<{ [key: string]: boolean }>(
    {}
  );

  const handleMouseEnter = (id: string) =>
    setIsHovered({ ...isHovered, [id]: true });
  const handleMouseLeave = (id: string) =>
    setIsHovered({ ...isHovered, [id]: false });

  return (
    <section id="overview" className="bg-[#092415] text-white">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/2 relative">
            <div className="relative w-full h-[680px] pt-[56.25%] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[640px] bg-[url('/building.jpg')] bg-cover bg-center"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(9,36,21,0.8)] rounded-lg w-[400px] p-8 flex flex-col items-center justify-center border-2 border-[#b57630]">
                <img
                  src="/icon1.png"
                  alt="Icon 1"
                  className="mb-4"
                />
                <h2 className="text-2xl text-white font-bold mb-4 text-center">
                  Let's Win Your Case
                </h2>
                <div className="w-[50px] h-[2px] bg-[#b57630] mb-4"></div>
                <p className="mb-8 text-base text-center">
                  Unlock your legal potential with our seasoned attorneys. We're not just about law; we're about your victory. With every case we take on, we bring a blend of grit, wit, and relentless dedication. We know the law, and we're here to make it work for you. Discover our unique approach to winning your case and see what sets us apart.
                </p>
                <button className="bg-transparent border-none text-[#b57630] underline font-bold p-0 cursor-pointer flex items-center">
                  <span className="text-base">Learn More About Us</span>
                  <FaArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:p-8 pt-12 pb-12 md:pt-0 md:pb-0 relative z-10">
            <h2 className="text-2xl text-white font-bold mb-8 border-l-4 border-[#b57630] pl-4 mt-0 md:mt-8">
              Why Choose Our Legal Services
            </h2>
            <p className="text-white mb-8 md:mb-8 pl-4">
              Choosing our legal services means entrusting your case to a team
              renowned for precision, dedication, and a personalized approach
              that targets your specific legal goals with clarity and
              effectiveness.
            </p>
            <div className="mb-8 relative">
              <img
                src="/icon3.png"
                alt="Icon 1"
                onMouseEnter={() => handleMouseEnter("icon1")}
                onMouseLeave={() => handleMouseLeave("icon1")}
                className={`md:absolute md:left-[-70px] md:top-[10%] md:mr-0 z-20 transition-transform duration-300 ease-in-out ${
                  isHovered["icon1"] ? "md:scale-110" : ""
                }`}
              />
              <h3 className="text-xl text-[#b57630] font-bold mb-2 pl-4 md:pl-10 flex items-center md:block">
                Experienced Attorneys
              </h3>
              <p className="text-white pl-4 md:pl-10">
                Our team of attorneys brings a wealth of experience to the table. They're battle-tested, sharp-minded, and deeply committed to our clients' causes. Their profound legal expertise and proactive approach pave the way for success in even the most complex cases.
              </p>
            </div>
            <div className="mb-8 relative">
              <img
                src="/icon2.png"
                alt="Icon 2"
                onMouseEnter={() => handleMouseEnter("icon2")}
                onMouseLeave={() => handleMouseLeave("icon2")}
                className={`md:absolute md:left-[-60px] md:top-0 md:mr-0 z-20 transition-transform duration-300 ease-in-out ${
                  isHovered["icon2"] ? "md:scale-110" : ""
                }`}
              />
              <h3 className="text-xl text-[#b57630] font-bold mb-2 pl-4 md:pl-10 flex items-center md:block">
                Best Case Strategies
              </h3>
              <p className="text-white pl-4 md:pl-10">
                We approach each case with a tailor-made strategy, combining
                thorough research, innovative tactics, and deep legal acumen.
                Our strategies are designed to position your case in the best
                light, ensuring a robust and compelling argument in any legal
                setting.
              </p>
            </div>
            <div className="relative">
              <img
                src="/icon.png"
                alt="Icon 3"
                onMouseEnter={() => handleMouseEnter("icon3")}
                onMouseLeave={() => handleMouseLeave("icon3")}
                className={`md:absolute md:left-[-60px] md:top-0 md:mr-0 z-20 transition-transform duration-300 ease-in-out ${
                  isHovered["icon3"] ? "md:scale-110" : ""
                }`}
              />
              <h3 className="text-xl text-[#b57630] font-bold mb-2 pl-4 md:pl-10 flex items-center md:block">
                With You - From Start to Finish
              </h3>
              <p className="text-white pl-4 md:pl-10">
                Our commitment extends beyond legal advice. We journey with you from the initial consultation until the final verdict, providing guidance, support, and insight every step of the way. We're not just your attorneys; we're your steadfast partners in the pursuit of justice.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Overview;