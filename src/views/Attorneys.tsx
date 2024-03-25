"use client";
import Container from "@/components/Container";
import * as React from "react";
import Member from "@/components/CardTeam";

interface IAttorneysProps {}

const Attorneys: React.FunctionComponent<IAttorneysProps> = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? "#b57630" : "#6a411c",
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
    <section id="attorneys" className="bg-[#166432] py-2 pb-12">
      <Container>
        <h2 className="text-2xl text-white font-bold mb-8 border-l-4 border-[#b57630] pl-4 mt-8 md:mt-16">
          Dedicated Team of Attorneys
        </h2>
        <p className="text-white mb-8 md:mb-20 pr-8 md:pr-0 pl-4">
          Meet our attorneys, a group of distinguished legal experts dedicated to
          delivering justice across a spectrum of specializations. They are the
          cornerstone of our firm's success, ready to guide you with experience
          and expertise.
        </p>
        <div className="block md:flex flex-wrap gap-6 justify-center overflow-x-auto md:overflow-hidden scrollbar-none">
          <div className="flex w-max md:w-full gap-4 md:gap-6 pl-8 md:pl-0">
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
            <div className="pr-8 md:pr-0" />
          </div>
        </div>
        <hr className="border-t border-[#b57630] my-8" />
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold mb-4 text-center md:text-left">
            Are you a law graduate? Apply for an internship with us
          </h3>
          <p className="text-white mb-6 text-center md:text-left px-8 md:px-0">
            If you're pursuing a career in law, consider our internship program.
            It's a prime opportunity to gain valuable experience and learn from
            seasoned professionals in the field. Apply now to begin your journey
            in law.
          </p>
          <div className="flex justify-center md:justify-start mb-0 md:mb-8">
            <button
              style={buttonStyle}
              className="text-white px-2 py-2 mt-5 rounded-md transition duration-300"
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