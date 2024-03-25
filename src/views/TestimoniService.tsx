import * as React from "react";
import Container from "@/components/Container";

interface ITestimoniServiceProps {}

const TestimoniService: React.FunctionComponent<ITestimoniServiceProps> = (props) => {
  return (
    <section className="bg-[#092415] text-white p-4 md:p-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center mb-16 md:mb-0 md:p-0">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-6">
              Another Satisfied Client
            </h2>
            <p className="mb-6">
              {"\"When legal trouble loomed, Saul Goodman was there with the expertise and resolve to navigate the storm. His tactical approach not only cleared my path but ensured I understood every step we took. The outcome was more than just favorable—it was a complete turnaround from where I started.\""}
            </p>
            <p className="mb-8">
              {"\"Badger\" couldn't believe the exceptional dedication and insight Saul brought to the table, turning a dire situation into a success story. It's more than legal service; it's a commitment to justice and client well-being that sets Saul apart."}
            </p>
          </div>
          <div className="w-full md:w-1/2 md:p-0">
            <div className="relative pb-[56.25%] mb-4">
              <iframe
                src="https://www.youtube.com/embed/Db-RFNJDO3s"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
              ></iframe>
            </div>
            <a href="#" className="inline-block px-6 py-3 bg-[#6a411c] text-white rounded-md no-underline">
              Watch Video
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:p-0">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 md:order-2">
            <div className="relative pb-[56.25%] mb-4">
              <iframe
                src="https://www.youtube.com/embed/P-nhEHXQcTs"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
              ></iframe>
            </div>
            <a href="#" className="inline-block px-6 py-3 bg-[#6a411c] text-white rounded-md no-underline">
              Watch Video
            </a>
          </div>
          <div className="w-full md:w-1/2 md:pl-8 md:mb-0 md:order-1">
            <h3 className="text-xl font-bold mb-6">
              Another Satisfied Client
            </h3>
            <div className="border-l-4 border-[#6a411c] pl-6">
              <p className="italic mb-4">
                {"\"In a legal landscape that seemed daunting, Saul Goodman was a beacon of clarity and strategy. His expertise turned the tide in my case, offering a tailored approach that spoke volumes of his dedication to justice and client success.\""}
              </p>
              <p className="font-bold">Wendy S.</p>
              <p className="text-gray-400">Hooker</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimoniService;
