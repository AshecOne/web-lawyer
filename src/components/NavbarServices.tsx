"use client";
import * as React from "react";
import { FaBars } from "react-icons/fa";

interface INavbarServicesProps {
  activePracticeArea: PracticeArea;
  setActivePracticeArea: React.Dispatch<React.SetStateAction<PracticeArea>>;
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

const NavbarServices: React.FunctionComponent<INavbarServicesProps> = ({
  activePracticeArea,
  setActivePracticeArea,
}) => {
  const practiceAreas: PracticeArea[] = [
    "Civil Rights Law",
    "Business Law",
    "Insurance Law",
    "Criminal Law",
    "Employment Law",
    "Elder Law",
    "Financial Law",
    "Corporate Law",
    "Property Law",
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[#092415] text-white p-4 lg:w-[250px]">
    <div className="lg:hidden">
      <button
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold">{isOpen ? "Practice Areas" : activePracticeArea}</span>
        <FaBars className="text-2xl" />
      </button>
    </div>
    <ul
      className={`${
        isOpen ? "block" : "hidden"
      } lg:block w-full space-y-2 mt-2 lg:mt-0`}
    >
      {practiceAreas.map((area) => (
        <li
          key={area}
          className={`cursor-pointer py-2 px-4 w-full ${
            activePracticeArea === area
              ? "bg-[#166432] font-bold"
              : "hover:bg-[#0f3d24]"
          }`}
          onClick={() => {
            setActivePracticeArea(area);
            setIsOpen(false);
          }}
        >
          {area}
        </li>
      ))}
    </ul>
  </nav>
  );
};

export default NavbarServices;
