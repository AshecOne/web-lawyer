import * as React from "react";
import Image from "next/image";

interface ICultureProps {}

const Culture: React.FunctionComponent<ICultureProps> = (props) => {
  const cultureParagraph = `At Saul Goodman Law Firm, we are dedicated to creating an environment that upholds the highest standards of the legal profession. Our culture champions diligence, ethical practice, and a commitment to justice, fostering a supportive and inclusive workspace.`;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
      <div className="w-full md:w-1/2 text-center md:text-right">
        <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
        <p className="text-lg mb-8">{cultureParagraph}</p>
      </div>
      <div className="md:w-1/2">
        <div className="flex md:flex-none flex-col md:grid md:grid-cols-2 md:gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-black mb-4 md:mb-0">
            <Image
              width={48}
              height={48}
              src="/give.png"
              alt="Collaboration Icon"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p>
              We foster a collaborative environment where teamwork and knowledge
              sharing are encouraged to achieve the best results for our
              clients.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-black mb-4 md:mb-0">
            <Image
              width={48}
              height={48}
              src="/teamwork.png"
              alt="Integrity Icon"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p>
              We maintain the highest ethical standards and uphold the
              principles of honesty, transparency, and professionalism in all
              our dealings.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-black mb-4 md:mb-0">
            <Image
              width={48}
              height={48}
              src="/target.png"
              alt="Excellence Icon"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p>
              We strive for excellence in every aspect of our work, continuously
              improving our skills and knowledge to provide the highest quality
              legal services.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-black mb-4 md:mb-0">
            <Image
              width={48}
              height={48}
              src="/stats.png"
              alt="Diversity and Inclusion Icon"
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Diversity and Inclusion</h3>
            <p>
              We embrace diversity and inclusivity, creating a welcoming
              environment where everyone is valued and respected, regardless of
              their background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
