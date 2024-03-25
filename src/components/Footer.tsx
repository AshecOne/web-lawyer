import * as React from "react";
import Container from "./Container";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const textAlignStyle: React.CSSProperties = {
    textAlign: "max-md" ? "center" : "left",
  } as React.CSSProperties;
  return (
    <footer>
      <section className="bg-[#092415] text-white py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-[#b57630] pl-4">
                About Us
              </h3>
              <p className="mb-4 pl-3 md:pl-0">
                {`Your partner in navigating legal complexities. Committed to delivering justice and unparalleled service.`}
              </p>
              <p className="pl-3 md:pl-0">
              {`At the core of our practice is a commitment to advocacy and integrity. We champion our clients' rights with expertise and passion.`}
              </p>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-[#b57630] pl-4">
                Practice Areas
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="pl-3 md:pl-0">
                  <a href="/services" className="text-[#b57630] hover:text-[#e09d55]">
                    Auto & Car Accidents
                  </a>
                </li>
                <li className="pl-3 md:pl-0">
                  <a href="/services" className="text-[#b57630] hover:text-[#e09d55]">
                    Sexual Abuse and Assault
                  </a>
                </li>
                <li className="pl-3 md:pl-0">
                  <a href="/services" className="text-[#b57630] hover:text-[#e09d55]">
                    Business Litigation
                  </a>
                </li>
                <li className="pl-3 md:pl-0">
                  <a href="/services" className="text-[#b57630] hover:text-[#e09d55]">
                    Defective Medical Devices
                  </a>
                </li>
                <li className="pl-3 md:pl-0">
                  <a href="/services" className="text-[#b57630] hover:text-[#e09d55]">
                    Toyota Accelerator Recall
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-[#b57630] pl-4">
                Contact Info
              </h3>
              <p className="mb-4 pl-3 md:pl-0">
                {`Reach out for bespoke legal solutions. We're here to assist.`}
              </p>
              <div className="flex items-center mb-2 pl-3 md:pl-0">
                <div className="bg-transparent border p-2 mr-2">
                  <FaMapMarkerAlt className="text-[#b57630]" />
                </div>
                <p>Address: Albuquerque, New Mexico</p>
              </div>
              <div className="flex items-center mb-2 pl-3 md:pl-0">
                <div className="bg-transparent border p-2 mr-2">
                  <FaPhone className="text-[#b57630]" />
                </div>
                <p>Phone: +62 851-5672-0292</p>
              </div>
              <div className="flex items-center pl-3 md:pl-0">
                <div className="bg-transparent border p-2 mr-2">
                  <FaEnvelope className="text-[#b57630]" />
                </div>
                <a href="" className="text-[#b57630] hover:text-[#e09d55]">
                  Email: ashecone@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-l-4 border-[#b57630] pl-4">
                Newsletter
              </h3>
              <p className="mb-4 pl-3 md:pl-0">
                Follow our legal advice in a form of a monthly newsletter
              </p>
              <form style={textAlignStyle}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-3/4 md:w-full px-4 py-2 pr-20 text-gray-700 bg-white border focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute mt-1 right-[55px] md:right-[20px] px-5 py-1 rounded-md text-white bg-[#092415]  hover:bg-[#0d351e] focus:outline-none"
                  >
                    GO
                  </button>
                </div>
                <div className="flex justify-center mt-2">
                  <input type="checkbox" id="gdpr" className="mr-2" />
                  <label htmlFor="gdpr">Accept GDPR Terms</label>
                </div>
              </form>
              <h3 className="text-xl font-bold mt-5 mb-4 border-l-4 border-[#b57630] pl-4">
                Follow Us
              </h3>
              <div className="flex max-md:justify-center space-x-4">
                <a
                  href="https://www.facebook.com/AttorneySaulGoodman/"
                  className="text-white hover:text-gray-300"
                >
                  <div className="bg-transparent border p-3 mr-2">
                    <FaFacebookF className="text-[#b57630] hover:text-[#e09d55]" />
                  </div>
                </a>
                <a
                  href="https://twitter.com/itsSaulGoodman?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  className="text-white hover:text-gray-300"
                >
                  <div className="bg-transparent border p-3 mr-2">
                    <FaTwitter className="text-[#b57630] hover:text-[#e09d55]" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/bettercallsaulamc/"
                  className="text-white hover:text-gray-300"
                >
                  <div className="bg-transparent border p-3 mr-2">
                    <FaInstagram className="text-[#b57630] hover:text-[#e09d55]" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/saul-goodman-43553a83/"
                  className="text-white hover:text-gray-300"
                >
                  <div className="bg-transparent border p-3 mr-2">
                    <FaLinkedinIn className="text-[#b57630] hover:text-[#e09d55]" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black text-white py-4">
        <Container>
          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
            <p className="mb-3 md:mb-0 text-center">
              © Copyright 2024 - Change the world with{" "}
              <a href="#" className="text-[#b57630] hover:text-[#e09d55]">
                AshecOne
              </a>
            </p>
            <div className="hidden md:flex md:space-x-4">
              <a href="/about_us" className="text-[#b57630] hover:text-[#e09d55]">
                ABOUT US
              </a>
              <div className="flex items-center">
                <div className="border-l-4 border-white pl-4 mr-4">
                  <a href="/teams" className="text-[#b57630] hover:text-[#e09d55]">
                    ATTORNEYS
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="border-l-4 border-white pl-4">
                  <a href="https://maps.app.goo.gl/JddXZjRqtjjVfPiF7" className="text-[#b57630] hover:text-[#e09d55]">
                    OFFICES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
