import * as React from "react";
import Image from "next/image";

interface ICardTestimoniProps {
  name: string;
  testimonial: string;
  imageUrl: string;
  role: string;
  companyUrl: string;
  bgColor: string;
}

const CardTestimoni: React.FunctionComponent<ICardTestimoniProps> = ({
  name,
  testimonial,
  imageUrl,
  role,
  companyUrl,
  bgColor,
}) => {
  return (
    <div
      className="w-full md:w-[400px] p-6 rounded-lg shadow-lg flex flex-col justify-between"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-white text-sm">{testimonial}</p>
      <div className="flex items-center mt-4">
        <Image
          width={64}
          height={64}
          className="rounded-full border-4 border-white"
          src={imageUrl}
          alt={`Photo of ${name}`}
        />
        <div className="ml-4">
          <p className="text-white font-bold">{name}</p>
          <p className="text-green-200 text-sm">{role}</p>
          <a href={companyUrl} className="text-green-200 text-sm underline">
            {companyUrl.replace("https://", "").replace("http://", "")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardTestimoni;
