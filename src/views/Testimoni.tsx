"use client";
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
        <div className="bg-[#092415]">
          <h2 className="text-2xl text-white font-bold mb-4 border-l-4 border-[#b57630] pl-4">
            What Our Clients Say
          </h2>
          <p className="text-white mb-8" style={{ paddingLeft: "1rem" }}>
            {`Client's experiences with our legal team shine a light on our dedication to achieving justice, showcasing the positive impacts we’ve made on their lives through unwavering support and effective legal representation.`}
          </p>
        </div>
        <div
          style={{
            display: isMobile ? "flex" : "grid",
            gridTemplateColumns: isMobile
              ? "none"
              : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            overflowX: isMobile ? "scroll" : "auto",
            paddingLeft: isMobile ? "2rem" : "0",
            paddingRight: isMobile ? "2rem" : "0",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              style={{
                minWidth: isMobile ? "300px" : "none",
                marginRight: isMobile ? "1rem" : "0",
              }}
            >
              <CardTestimoni bgColor={getBgColor(index)} {...testimonial} />
            </div>
          ))}
          {isMobile && <div style={{ minWidth: "1rem" }} />}
        </div>
      </Container>
    </section>
  );
};

export default Testimoni;
