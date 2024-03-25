"use client";
import { useEffect, useState } from "react";
import { fetchRandomUser } from "@/utils/fetchRandomUser";
import Container from "@/components/Container";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";

interface ITeamsProps {}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchRandomUser(5);
      setUsers(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#166432]">
        <TailSpin color="#b57630" height={80} width={80} />
      </div>
    );
  }

  const positions = [
    "Elder Law Specialist",
    "Corporate Law Expert",
    "Intellectual Property Counsel",
    "Employment Law Strategist",
    "Litigation Attorney",
  ];

  const descriptions = [
    "Our Elder Law Specialist provides compassionate and comprehensive legal advice, protecting the rights and dignity of seniors and their families in navigating through the complexities of estate planning, Medicare, and long-term care.",
  "Our Corporate Law Expert offers tailored counsel for all business-related legal matters, from mergers and acquisitions to corporate governance, ensuring your business thrives in today's competitive environment.",
  "As Intellectual Property Counsel, we safeguard your innovative creations, manage patents and trademarks, and provide the legal backing to protect and leverage your intellectual assets.",
  "Our Employment Law Advocate stands at the forefront of workplace rights, offering expert guidance on labor laws, employee relations, and effective resolution of workplace disputes.",
  "Adept in the courtroom, our Litigation Attorney strategizes to defend your interests, combining meticulous preparation and superior advocacy to represent clients in civil disputes."
  ];
  return (
    <section id="teams" className="bg-[#166432]">
      <Container>
        <div className="text-center px-4 lg:px-0 pt-5">
          <h2 className="text-3xl md:text-6xl font-bold text-white">Our Team</h2>
          <p className="text-white">
          {`Meet our attorneys, a group of distinguished legal experts dedicated
          to delivering justice across a spectrum of specializations. They are
          the cornerstone of our firm's success, ready to guide you with
          experience and expertise.`}
          </p>
        </div>
        <div className="flex overflow-x-auto py-5 lg:overflow-visible lg:flex-wrap lg:justify-center">
          {users.map((user, index) => (
            <div key={index} className="flex-shrink-0 lg:flex-shrink w-full lg:w-auto">
              <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center mx-2 lg:my-4 p-6 rounded-lg shadow-lg bg-[#092415] text-white h-[600px] md:h-80`}>
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-48 h-48 object-cover lg:w-48 lg:h-48 mb-4 lg:mb-0"
                />
                <div className="px-6 py-1 md:py-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{`${user.name.first} ${user.name.last}`}</h3>
                    <p className="text-indigo-300">
                      {positions[index % positions.length]}
                    </p>
                    <p className="mb-4">
                      {descriptions[index % descriptions.length]}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <FaEnvelope className="text-[#b57630]" />
                      <p className="ml-2">{user.email}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaPhone className="text-[#b57630]" />
                      <p className="ml-2">{user.phone}</p>
                    </div>
                    <div className="mt-4">
                      <p className="mb-2 text-[#b57630]">Want to follow?</p>
                      <div className="flex space-x-2">
                        <FaInstagram className="text-[#b57630] cursor-pointer hover:text-[#e09d55]" />
                        <FaLinkedin className="text-[#b57630] cursor-pointer hover:text-[#e09d55]" />
                        <FaFacebook className="text-[#b57630] cursor-pointer hover:text-[#e09d55]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Teams;
