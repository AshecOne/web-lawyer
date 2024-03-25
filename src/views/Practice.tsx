import Container from "@/components/Container";
import CardService from "@/components/CardService";
import * as React from "react";

interface IPracticeProps {}

const Practice: React.FunctionComponent<IPracticeProps> = (props) => {
  return (
    <section id="services" className="bg-[#166432] py-12 md:py-16">
      <Container>
        <div className="mb-12">
          <h2 className="text-lg md:text-xl text-white font-bold mb-4 border-l-4 border-[#b57630] pl-4">
            Practice Areas
          </h2>
          <p className="text-white mb-4 md:mb-12 pl-4">
            Our firm specializes in a broad spectrum of legal services, ensuring
            clients receive expert support in key areas:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 pl-8 md:pl-0 scrollbar-none">
          <div className="flex">
            <div className="flex-none w-[300px] mr-4">
              <CardService
                icon="/burung.png"
                title="Civil Rights Law"
                description="Safeguarding individual freedoms and ensuring justice and equality."
              />
            </div>
            <div className="flex-none w-[300px] mr-4">
              <CardService
                icon="/neraca.png"
                title="Corporate Law"
                description="Offering legal counsel for businesses on governance, compliance, and transactions."
              />
            </div>
            <div className="flex-none w-[300px] mr-4">
              <CardService
                icon="/palu.png"
                title="Criminal Law"
                description="Providing robust defense and representation in criminal cases to protect rights."
              />
            </div>
            <div className="flex-none w-[300px] pr-8 md:pr-0">
              <CardService
                icon="/buku.png"
                title="Financial Law"
                description="Advising on financial transactions, regulations, and compliance for secure financial operations."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Practice;