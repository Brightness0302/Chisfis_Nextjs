import React, { FC, HTMLAttributes } from "react";

export interface PFieldProps extends HTMLAttributes<HTMLHeadElement> {
}

const PField: FC<PFieldProps> = ({ 
  className="", 
  children, 
  ...args 
}) => {
  return (
    <p
      className={`nc-Label ${className}`}
      {...args}
    >
        <span>
            {children}
        </span>
    </p>
  );
};

export default PField;
