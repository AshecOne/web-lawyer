"use client";
import Container from "@/components/Container";
import Culture from "@/components/Culture";
import FAQ from "@/components/FAQ";
import History from "@/components/History";
import Member from "@/components/CardTeam";
import * as React from "react";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

interface IUser {
  name: string;
  position: string;
  image: string;
  description: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const positions = [
  "Elder Law Specialist",
  "Corporate Law Expert",
  "Intellectual Property Counsel",
  "Employment Law Strategist",
  "Litigation Attorney",
];

const descriptions = [
  "Our Elder Law Specialist ensures seniors navigate estate and health care planning with dignity and legal excellence.",
  "Our Corporate Law Expert navigates business law complexities to secure and advance your corporate interests.",
  "Our Intellectual Property Counsel fiercely protects and strategizes for your intellectual property rights.",
  "Our Employment Law Advocate expertly navigates labor laws to uphold workplace rights and resolve disputes.",
  "Our Litigation Attorney masterfully represents your interests, ensuring justice prevails in civil disputes.",
];

const fetchRandomUser = async (count: number): Promise<IUser[]> => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();
    return data.results.map((user: any, index: number) => ({
      name: `${user.name.first} ${user.name.last}`,
      position: positions[index],
      image: user.picture.large,
      description: descriptions[index],
      socialLinks: {
        twitter: `https://twitter.com/${user.login.username}`,
        facebook: `https://facebook.com/${user.login.username}`,
        instagram: `https://instagram.com/${user.login.username}`,
        linkedin: `https://linkedin.com/in/${user.login.username}`,
      },
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

const AboutUs: React.FunctionComponent = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchRandomUser(5);
      setUsers(data);
      setIsLoading(false);
    };
    fetchData();

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#166432]">
        <TailSpin color="#b57630" height={80} width={80} />
      </div>
    );
  }

  const getTeamRow = (members: IUser[]) => {
    return (
      <div className="flex justify-center mb-5 flex-wrap">
        {members.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
            description={member.description}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="about_us" className="bg-[#166432] block lg:block md:hidden pt-5 text-white">
      <Container>
        <History />
        <div className="flex items-center justify-center py-10 md:py-20">
          <Culture />
        </div>
        <div className="my-8 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-2">Meet the Team</h2>
          <p className="text-gray-300 mb-8">
            Our team of expert lawyers and paralegals.
          </p>
          <div
            className={`max-w-5xl mx-auto ${
              isMobile ? "flex overflow-x-auto space-x-4 px-4" : ""
            }`}
          >
            {isMobile ? (
              users.map((member, index) => (
                <div key={index} className="flex-shrink-0">
                  <Member
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    description={member.description}
                    socialLinks={member.socialLinks}
                  />
                </div>
              ))
            ) : (
              <>
                {getTeamRow(users.slice(0, 3))}
                <div className="max-w-3xl mx-auto">
                  {getTeamRow(users.slice(3))}
                </div>
              </>
            )}
          </div>
        </div>
        <FAQ />
      </Container>
    </section>
  );
};

export default AboutUs;
