import * as React from "react";
import Container from "@/components/Container";
import { FaHandPointRight, FaArrowRight } from "react-icons/fa";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = ({}) => {
  return (
    <section id="hero" className="bg-black">
      <div
        style={{ backgroundImage: `url("/hero.jpg")` }}
        className="relative flex items-center justify-end w-full bg-cover bg-center h-[720px] md:h-[500px]"
      >
        <Container>
          <div
            className="absolute right-0 w-full md:w-1/2 md:transform md:translate-x-[-20%] bg-[rgba(9,36,21,0.8)] rounded-lg p-8 md:h-[300px] md:bottom-[60px] md:flex md:flex-col md:justify-start md:items-start sm:translate-y-[30%]"
          >
            <div className="flex items-center mb-6">
              <h1 className="font-bold mr-4 text-white text-xl md:text-2xl">
                Speedy Justice for You
              </h1>
              <FaHandPointRight size={24} color="#b57630" className="hidden md:block" />
              <FaHandPointRight size={20} color="#b57630" className="md:hidden" />
            </div>
            <div className="w-[30px] md:w-[50px] h-[2px] bg-[#b57630] mb-6"></div>
            <p className="mb-8 text-white text-sm md:text-base">
              Our law firm stands at the forefront of providing prompt, personalized legal solutions. Merging professionalism with accessibility, we navigate each client through their journey to justice, ensuring clarity and efficiency every step of the way.
            </p>
            <button className="bg-transparent border-none text-white underline font-bold p-0 cursor-pointer flex items-center">
              <a className="text-sm md:text-base" href="/teams">
                Contact Our Attorneys
              </a>
              <FaArrowRight size={12} className="ml-1 md:hidden" />
              <FaArrowRight size={16} className="ml-1 hidden md:block" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;