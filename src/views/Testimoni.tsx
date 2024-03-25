import * as React from "react";
import Container from "@/components/Container";
import CardTestimoni from "@/components/CardTestimoni";

interface ITestimoniProps {
  testimonials?: Array<{
    name: string;
    testimonial: string;
    imageUrl: string;
    role: string;
    companyUrl: string;
  }>;
}

const Testimoni: React.FunctionComponent<ITestimoniProps> = () => {
  const testimonialsData = [
    {
      name: "Annie Franklin",
      testimonial:
        "Attorney Sarah Thompson's exceptional legal services exceeded my expectations. Her expertise, dedication, and compassion were evident throughout my case. Sarah's meticulous preparation and tireless work ethic were instrumental in achieving a favorable outcome. Her genuine care for her clients sets her apart. I am grateful for her outstanding representation and wholeheartedly recommend her to anyone in need of legal guidance.",
      imageUrl: "/profil.png",
      role: "CEO",
      companyUrl: "https://tokopedia.com",
    },
    {
      name: "Brian Jackson",
      testimonial:
        "Attorney Sarah Thompson's exceptional legal services exceeded my expectations. Her expertise, dedication, and compassion were evident throughout my case. Sarah's meticulous preparation and tireless work ethic were instrumental in achieving a favorable outcome. Her genuine care for her clients sets her apart. I am grateful for her outstanding representation and wholeheartedly recommend her to anyone in need of legal guidance.",
      imageUrl: "/profil.png",
      role: "Marketing Manager",
      companyUrl: "https://bukalapak.com",
    },
    {
      name: "Tracy Stewart",
      testimonial:
        "Attorney Sarah Thompson's exceptional legal services exceeded my expectations. Her expertise, dedication, and compassion were evident throughout my case. Sarah's meticulous preparation and tireless work ethic were instrumental in achieving a favorable outcome. Her genuine care for her clients sets her apart. I am grateful for her outstanding representation and wholeheartedly recommend her to anyone in need of legal guidance.",
      imageUrl: "/profil.png",
      role: "Product Developer",
      companyUrl: "https://grab.com",
    },
  ];

  const getBgColor = (index: number) => {
    return index % 2 === 0 ? "#092415" : "#166432";
  };

  return (
    <section id="testimoni" className="bg-[#092415] text-white py-12">
      <Container>
        <div className="p-8 bg-[#092415]">
          <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#b57630] pl-4">
            What Our Clients Say
          </h2>
          <p className="text-white mb-8 pl-4">
            {`Clients' experiences with our legal team shine a light on our dedication to achieving justice, showcasing the positive impacts we have made on their lives through unwavering support and effective legal representation.`}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 overflow-x-auto md:overflow-visible">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="min-w-[300px] md:min-w-0 mr-4 md:mr-0">
              <CardTestimoni bgColor={getBgColor(index)} {...testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimoni;