import React, { FC, HTMLAttributes } from "react";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
}

const Label: FC<LabelProps> = ({ 
  className="", 
  children, 
  ...args 
}) => {
  return (
    <label
      className={`nc-Label ${className}`}
      {...args}
    >
      {children}
    </label>
  );
};

export default Label;
