import * as React from 'react';

interface ICardPlanProps {
  title: string;
  price: number;
  features: string[];
  mostPopular?: boolean;
}

const CardPlan: React.FunctionComponent<ICardPlanProps> = ({
  title,
  price,
  features,
  mostPopular = false,
}) => {
  return (
    <div className="flex flex-col h-full p-6 w-[300px] rounded-lg shadow-md bg-[#092415] text-white hover:bg-[#0d351e] transition duration-200">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="text-4xl font-bold mb-4">${price}/month</div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-2 px-4 mt-auto rounded-lg bg-[#6a411c] hover:bg-[#b57630] text-white transition duration-200">
        Choose Plan
      </button>
    </div>
  );
};

export default CardPlan;