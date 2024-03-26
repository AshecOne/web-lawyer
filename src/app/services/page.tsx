"use client";
import CardArticle from "@/components/CardArticle";
import CardPlan from "@/components/CardPlan";
import Container from "@/components/Container";
import NavbarServices from "@/components/NavbarServices";
import ServiceContents from "@/components/ServiceContents";
import TestimoniService from "@/views/TestimoniService";
import { TailSpin } from "react-loader-spinner";
import * as React from "react";

interface IServicesProps {}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
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

  const [activePracticeArea, setActivePracticeArea] =
    React.useState<PracticeArea>("Civil Rights Law");
    const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#166432]">
        <TailSpin color="#b57630" height={80} width={80} />
      </div>
    );
  }

  return (
    <section id="services" className="bg-[#166432] pt-5">
      <Container>
        <div className="mb-8 text-center px-4 lg:px-0">
          <h2 className="text-3xl md:text-6xl font-bold mb-2 text-white">
            Our Practice Areas
          </h2>
          <p className="text-white">
          Our firm specializes in a broad spectrum of legal services, ensuring
            clients receive expert support in key areas
          </p>
        </div>
        <div className="lg:flex lg:items-start">
          <div className="lg:w-[270px] mb-4 lg:mb-0 px-4 lg:px-0 lg:sticky lg:top-8">
            <NavbarServices
              activePracticeArea={activePracticeArea}
              setActivePracticeArea={setActivePracticeArea}
            />
          </div>
          <div className="lg:w-[45%] lg:pl-8 px-5 lg:px-0 pt-2 lg:mt-32">
            <ServiceContents activePracticeArea={activePracticeArea} />
          </div>
        </div>
      </Container>
      <div className="mt-16">
        <Container>
          <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center text-white">
            Plan for Justice
          </h2>
          <div className="flex justify-center">
            <div className="flex pl-6 md:pl-0 flex-nowrap overflow-x-auto md:justify-center md:grid md:grid-cols-3 gap-6">
              <div className="flex-shrink-0 w-80 md:w-auto mb-5">
                <CardPlan
                  title="Starter"
                  price={19}
                  features={[
                    "Multi-step Zaps",
                    "3 Premium Apps",
                    "2 Users team",
                  ]}
                />
              </div>
              <div className="flex-shrink-0 w-80 md:w-auto mb-5">
                <CardPlan
                  title="Professional"
                  price={54}
                  features={[
                    "Multi-step Zaps",
                    "Unlimited Premium",
                    "50 Users team",
                    "Shared Workspace",
                  ]}
                />
              </div>
              <div className="flex-shrink-0 w-80 md:w-auto mb-5">
                <CardPlan
                  title="Company"
                  price={89}
                  features={[
                    "Multi-step Zap",
                    "Unlimited Premium",
                    "Unlimited Users Team",
                    "Advanced Admin",
                    "Custom Data Retention",
                  ]}
                  mostPopular
                />
              </div>
            </div>
          </div>
        </Container>
        <TestimoniService />
        <CardArticle />
      </div>
    </section>
  );
};

export default Services;
