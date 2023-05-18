"use client";

import React, { FC } from "react";

export interface IconFieldProps {
  title?: string;
  iconName?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const IconField: FC<IconFieldProps> = ({
  title,
  iconName = "las la-search",
  className = "",
  children, 
  onClick = () => {},
}) => {
    return (
      <div>
        <i title={title} className={`${iconName} ${className}`} onClick={() => onClick && onClick()}></i>
        {children}
      </div>
        
    );
};

export default IconField;
