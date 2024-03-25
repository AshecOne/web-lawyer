import * as React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface IMemberProps {
  name: string;
  position: string;
  image: string;
  description: string; 
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const Member: React.FunctionComponent<IMemberProps> = (props) => {
  
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#092415",
    color: "white",
    padding: "1rem",
    borderRadius: "8px",
    maxWidth: "300px", 
    margin: "0 auto", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "470px",
    flexGrow: 1,
  };

  const imageContainerStyle: React.CSSProperties = {
    width: '100%', 
    height: '200px', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    overflow: 'hidden', 
  };

  const imageStyle: React.CSSProperties = {
    width: 'auto', 
    height: '100%', 
    objectFit: 'cover', 
  };

  const iconStyle: React.CSSProperties = {
    color: "#b57630",
    margin: "0 0.5rem",
    transition: "color 0.3s ease",
  };

  
  const handleIconHover = (
    event: React.MouseEvent<SVGElement>,
    isHovered: boolean
  ) => {
    event.currentTarget.style.color = isHovered ? "#ffffff" : "#b57630";
  };

  return (
    <div style={{ ...cardStyle }}>
      <div style={imageContainerStyle}>
        <img
          src={props.image}
          alt={props.name}
          style={imageStyle}
        />
      </div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        {props.name}
      </h3>
      <p style={{ color: "#b57630", marginBottom: "1rem" }}>{props.position}</p>
      <div style={{ flexGrow: 1 }}> 
      <p style={{ marginBottom: "1rem" }}>{props.description}</p>
      </div>
      <div
        style={{
          borderTop: "1px solid #b57630",
          width: "100%",
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "auto",
        }}
      >
        {props.socialLinks.twitter && (
          <a
            href={props.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              style={iconStyle}
              onMouseEnter={(e) => handleIconHover(e, true)}
              onMouseLeave={(e) => handleIconHover(e, false)}
            />
          </a>
        )}
        {props.socialLinks.facebook && (
          <a
            href={props.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              style={iconStyle}
              onMouseEnter={(e) => handleIconHover(e, true)}
              onMouseLeave={(e) => handleIconHover(e, false)}
            />
          </a>
        )}
        {props.socialLinks.instagram && (
          <a
            href={props.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              style={iconStyle}
              onMouseEnter={(e) => handleIconHover(e, true)}
              onMouseLeave={(e) => handleIconHover(e, false)}
            />
          </a>
        )}
        {props.socialLinks.linkedin && (
          <a
            href={props.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              style={iconStyle}
              onMouseEnter={(e) => handleIconHover(e, true)}
              onMouseLeave={(e) => handleIconHover(e, false)}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Member;
