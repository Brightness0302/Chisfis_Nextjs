import React, { FC } from "react";

export interface LabelProps {
  className?: string;
  children?: React.ReactNode;
}

const Label: FC<LabelProps> = ({ className = "", children }) => {
  return (
    <label
      className={`${className} nc-Label font-medium text-d-background dark:text-background`}
    >
      {children}
    </label>
  );
};

export default Label;
