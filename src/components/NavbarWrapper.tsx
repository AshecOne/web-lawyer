"use client";
import React, { FC, useState, useEffect } from 'react';

const NavbarWrapper: FC = (props) => {
  const [Navbar, setNavbar] = useState<FC | null>(null);

  useEffect(() => {
    const loadNavbar = async () => {
      const { default: NavbarComponent } = await import('./Navbar');
      setNavbar(() => NavbarComponent);
    };

    loadNavbar();
  }, []);

  if (!Navbar) {
    return <div></div>;
  }

  const NavbarElement = Navbar as React.ComponentType;
  
  return <NavbarElement {...props} />;
};

export default NavbarWrapper;
