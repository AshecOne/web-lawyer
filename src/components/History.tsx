import * as React from "react";
import Image from "next/image";

interface IHistoryProps {}

const History: React.FunctionComponent<IHistoryProps> = (props) => {
  const videoContainerStyle = {
    paddingTop: "56.25%",
  };

  return (
    <section className="bg-[#166432] py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-white text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-2">About Us</h2>
          <p className="text-white">
            {`At the core of our practice is a commitment to advocacy and integrity. We champion our clients' rights with expertise and passion.`}
          </p>
        </div>
        <section className="bg-[#092415] p-5 mb-10">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-white mb-4 pr-4">
                Saul Goodman Law Firm was founded in 2005 by Saul Goodman, a
                brilliant and passionate attorney dedicated to fighting for
                justice. With a vision to provide top-notch legal services to
                those in need, Saul assembled a team of skilled lawyers who
                shared his commitment to excellence.
              </p>
              <p className="text-white pr-4 hidden md:block">
                Over the years, Saul Goodman Law Firm has grown into a respected
                institution known for its tenacity, integrity, and unwavering
                dedication to its clients. The firm has successfully handled
                numerous high-profile cases and earned a reputation as a
                formidable force in the legal community.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                width={620}
                height={413}
                src="/office.webp"
                alt="Law Firm"
                className="mb-4 md:mb-0"
              />
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-3/5 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Who Can You Sue?
            </h3>
            <div style={videoContainerStyle} className="relative w-full">
              <iframe
                src="https://www.youtube.com/embed/pPd67CEL54E"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-3/5 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Better Call Saul
            </h3>
            <div style={videoContainerStyle} className="relative w-full">
              <iframe
                src="https://www.youtube.com/embed/wqnHtGgVAUE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
