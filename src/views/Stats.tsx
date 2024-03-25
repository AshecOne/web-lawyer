import * as React from "react";
import Container from "@/components/Container";

interface IStatsProps {}

const Stats: React.FunctionComponent<IStatsProps> = (props) => {
  const stats = [
    { value: "3,600+", label: "TRUSTED CLIENTS" },
    { value: "18,480", label: "CASE STUDIES" },
    { value: "16,840+", label: "TOTAL CASES WON" },
    { value: "99.5%", label: "SUCCESS RATE" },
  ];

  return (
    <section id="stats" className="hidden md:flex flex-col w-full">
      <div
        className="text-white py-8 px-12"
        style={{
          backgroundColor: "#092415",
          borderTop: "1px solid white",
          borderBottom: "1px solid white",
        }}
      >
        <Container>
          <div
            className="flex justify-between"
            style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{
                  width: "25%",
                  color: "#b57630",
                  borderRight:
                    index !== stats.length - 1 ? "1px solid white" : "none",
                  paddingRight: index !== stats.length - 1 ? "1rem" : "0",
                }}
              >
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <div className="text-lg uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Stats;
