import * as React from "react";
import Image from "next/image";

interface ICardServiceProps {
  icon: string;
  title: string;
  description: string;
}

const CardService: React.FunctionComponent<ICardServiceProps> = (props) => {
  const { icon, title, description } = props;

  const imageContainerHeight = "80px";
  const titleTopMargin = "20px";

  return (
    <div
      style={{
        backgroundColor: "#092415",
        borderRadius: "8px",
        padding: "2rem",
        textAlign: "left",
        border: "2px solid #b57630",
        width: "323px",
        height: "315.8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <div style={{ height: imageContainerHeight, marginBottom: "0.5rem" }}>
        <Image width={80} height={80} src={icon} alt={title} />
      </div>
      <h3
        style={{
          fontSize: "1.5rem",
          color: "#b57630",
          marginTop: titleTopMargin,
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "1rem", color: "#fff" }}>{description}</p>
    </div>
  );
};

export default CardService;
