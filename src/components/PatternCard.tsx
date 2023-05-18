"use client";

import React, { FC } from "react";
import Label from "./Label";

export interface PatternCardProps {
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const PatternCard: FC<PatternCardProps> = ({
  imageSrc="", 
  imageAlt="", 
  heading="", 
  children, 
  onClick = () => {},
}) => {
    return (
        <div onClick={()=>onClick()} className="flex flex-col gap-3">
            <div className="flex justify-content-center">
                <img src={imageSrc} alt={imageAlt} className="w-24 h-24" />
            </div>
            <Label className={"text-2xl text-center"}>{heading}</Label>
            {children}
        </div>
    );
};

export default PatternCard;
