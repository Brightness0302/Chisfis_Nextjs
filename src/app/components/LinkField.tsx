import React, { FC, HTMLAttributes } from "react";

export interface LinkFieldProps extends HTMLAttributes<HTMLAnchorElement> {
    to?: string;
}

const LinkField: FC<LinkFieldProps> = ({ 
  className="", 
  to="", 
  children, 
  ...args 
}) => {
  return (
    <a
      className={`nc-Label ${className}`}
      {...args}
    >
        {children}
    </a>
  );
};

export default LinkField;
