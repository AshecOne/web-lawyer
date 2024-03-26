"use client";
import React, { FC, useState, useEffect } from 'react';

const FooterWrapper: FC = (props) => {
  const [Footer, setFooter] = useState<FC | null>(null);

  useEffect(() => {
    const loadFooter = async () => {
      const { default: FooterComponent } = await import('./Footer');
      setFooter(() => FooterComponent);
    };

    loadFooter();
  }, []);

  if (!Footer) {
    return <div>Loading...</div>; 
  }

  const FooterElement = Footer as React.ComponentType;
  
  return <FooterElement {...props} />;
};

export default FooterWrapper;
