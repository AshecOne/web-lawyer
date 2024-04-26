import Container from "@/components/Container";
import * as React from "react";

interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  return (
    <section
      id="map"
      className="bg-[#092415] block lg:block md:hidden"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <Container>
        <div className="inset-0 w-full" style={{ height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.6746965810717!2d-106.60290158507514!3d35.13127548032437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87227550ddfa9ebf%3A0xf6e63b12bdbcc3e6!2s9800%20Montgomery%20Blvd%20NE%2C%20Albuquerque%2C%20NM%2087111%2C%20USA!5e0!3m2!1sen!2sid!4v1688358231580!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Map;
