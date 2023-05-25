"use client";

import React, { FC } from "react";
import Label from "./Label";
import IconField from "./IconField";

export interface InfoFieldProps {
  iconName?: string;
  heading?: string; 
  content?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Info1Field: FC<InfoFieldProps> = ({
    iconName = "las la-check", 
    heading = "", 
    content = "", 
    className = "", 
    children, 
    onClick = () => {},
}) => {
    return (
      <div className={`${className} w-full md:w-96 flex flex-col gap-5 border border-gray-300 p-5 rounded-lg shadow-xl`} onClick={onClick}>
        <div className="flex flex-row justify-start items-center gap-5">
            <div className="flex items-center rounded-lg border border-gray-300 w-10 h-10">
                <IconField className="m-auto font-bold text-lg" iconName={iconName} />
            </div>
            <Label className="font-bold">{heading}</Label>
        </div>
        <div>
            <Label className="">{content}</Label>
        </div>
      </div>
        
    );
};

export default Info1Field;
