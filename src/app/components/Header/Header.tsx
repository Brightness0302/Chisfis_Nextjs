"use client"

import React, { FC } from "react";
import MainNav from "./MainNav";

export interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => {

  return (
    <div
      className={`nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg ${className}`}
    >
      <MainNav />
    </div>
  );
};

export default Header;
