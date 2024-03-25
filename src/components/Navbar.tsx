"use client";
import Container from "./Container";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";
import * as React from "react";
import { useRouter } from "next/navigation";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <section id="navbar" className="flex flex-col w-full">
      <div className="bg-black text-white py-2">
        <Container>
          <div className="flex justify-between items-center">
            <span className="hidden sm:block text-white">CALL US: (+62) 851-5672-0292</span>
            <div className="flex space-x-4 justify-center sm:justify-end w-full sm:w-auto">
              <a
                href="https://twitter.com/itsSaulGoodman?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className="text-[#b57630] hover:text-[#ecb06b] cursor-pointer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/AttorneySaulGoodman/"
                className="text-[#b57630] hover:text-[#ecb06b] cursor-pointer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/bettercallsaulamc/"
                className="text-[#b57630] hover:text-[#ecb06b] cursor-pointer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/saul-goodman-43553a83/"
                className="text-[#b57630] hover:text-[#ecb06b] cursor-pointer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className="h-1 bg-[#b57630] w-full"></div>
      <div className="bg-[#092415]">
        <Container>
          <div className="flex justify-between items-center py-4 sm:px-0 px-4">
            <img
              src="/logo.png"
              alt="Lawyer Logo"
              className="h-24 w-32 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
              onClick={() => router.push("/")}
            />
            <div className="ml-auto space-x-6 hidden md:flex">
              <a
                href="/services"
                className="text-white hover:text-[#b57630] text-lg"
              >
                Practice Areas
              </a>
              <a
                href="/teams"
                className="text-white hover:text-[#b57630] text-lg"
              >
                Attorneys
              </a>
              <a
                href="/about_us"
                className="text-white hover:text-[#b57630] text-lg"
              >
                About Us
              </a>
            </div>
            <FaBars
              className="text-white hover:text-[#b57630] text-2xl cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {isMenuOpen && (
            <div className="flex flex-col pb-4 px-4 md:hidden">
              <a
                href="/services"
                className="text-white hover:text-[#b57630] text-lg py-1"
              >
                Practice Areas
              </a>
              <a
                href="/teams"
                className="text-white hover:text-[#b57630] text-lg py-1"
              >
                Attorneys
              </a>
              <a
                href="/about_us"
                className="text-white hover:text-[#b57630] text-lg py-1"
              >
                About Us
              </a>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Navbar;
