import * as React from "react";
import Image from "next/image";

interface IServiceContentsProps {
  activePracticeArea: PracticeArea;
}

type PracticeArea =
  | "Civil Rights Law"
  | "Business Law"
  | "Insurance Law"
  | "Criminal Law"
  | "Employment Law"
  | "Elder Law"
  | "Financial Law"
  | "Corporate Law"
  | "Property Law";

type PracticeAreaContent = {
  [key in PracticeArea]: {
    image: string;
    content: JSX.Element;
  };
};

const ServiceContents: React.FunctionComponent<IServiceContentsProps> = ({
  activePracticeArea,
}) => {
  const content: PracticeAreaContent = {
    "Civil Rights Law": {
      image: "/civil.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Civil Rights Law</h2>
          <p>
            Our experienced civil rights attorneys fight for equality and
            justice. We handle cases involving discrimination, police
            misconduct, and more.
          </p>
        </div>
      ),
    },
    "Business Law": {
      image: "/business.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Business Law</h2>
          <p>
            We provide comprehensive legal services for businesses, including
            formation, contracts, mergers and acquisitions, and dispute
            resolution.
          </p>
        </div>
      ),
    },
    "Insurance Law": {
      image: "/insurance.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Insurance Law</h2>
          <p>
            {`Our insurance law team assists with coverage disputes, bad faith
            claims, and complex insurance litigation to protect our clients'
            interests.`}
          </p>
        </div>
      ),
    },
    "Criminal Law": {
      image: "/criminal.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Criminal Law</h2>
          <p>
            If you face criminal charges, our skilled defense attorneys will
            fight for your rights and freedom. We handle a wide range of
            criminal cases.
          </p>
        </div>
      ),
    },
    "Employment Law": {
      image: "/employment.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Employment Law</h2>
          <p>
            We represent employees and employers in various employment law
            matters, including discrimination, harassment, wrongful termination,
            and more.
          </p>
        </div>
      ),
    },

    "Elder Law": {
      image: "/elder.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Elder Law</h2>
          <p>
            {`Our elder law attorneys assist with estate planning, long-term care,
            Medicaid planning, guardianships, and protecting seniors' rights.`}
          </p>
        </div>
      ),
    },
    "Financial Law": {
      image: "/financial.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Financial Law</h2>
          <p>
            We provide legal guidance for financial transactions, regulatory
            compliance, and litigation in the financial sector.
          </p>
        </div>
      ),
    },
    "Corporate Law": {
      image: "/corporate.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Corporate Law</h2>
          <p>
            Our corporate law team advises on entity formation, corporate
            governance, mergers and acquisitions, and other corporate legal
            matters.
          </p>
        </div>
      ),
    },
    "Property Law": {
      image: "/property.png",
      content: (
        <div>
          <h2 className="text-3xl mb-2">Property Law</h2>
          <p>
            We handle a wide range of property law matters, including real
            estate transactions, landlord-tenant disputes, and property
            litigation.
          </p>
        </div>
      ),
    },
  };

  const activeContent = content[activePracticeArea];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow flex">
        <div className="w-[100px] pr-8">
          <Image
            width={62}
            height={64}
            src={activeContent.image}
            alt={activePracticeArea}
          />
        </div>
        <div className="w-11/12">
          {activeContent.content}{" "}
          <div className="mt-8">
            <button className="bg-[#6a411c] hover:bg-[#b57630] text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContents;
