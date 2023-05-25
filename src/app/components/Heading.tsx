import React, { FC, HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
}

const Heading: FC<HeadingProps> = ({ 
  className="", 
  children, 
  ...args 
}) => {
  return (
    <h2
      className={`nc-Label ${className}`}
      {...args}
    >
        <span>
            {children}
        </span>
    </h2>
  );
};

export default Heading;
